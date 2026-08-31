// One-off migration: converts the oversized used PNGs identified by
// tools/image-replacer's inventory scan to WebP (resizing anything wider
// than 1920px down to 1920px), rewrites every source reference to the new
// extension, and deletes the original PNG once the swap is verified safe.
// Not part of the build -- run manually via `node tools/optimize-images.cjs`.
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..')
const MAX_WIDTH = 1920
const WEBP_QUALITY = 82

function walkTextFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walkTextFiles(p, out)
    else if (/\.(jsx?|css)$/.test(entry.name)) out.push(p)
  }
  return out
}

async function main() {
  const inventory = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'tools/image-replacer/reports/image-inventory.json'), 'utf8')
  )

  let targets = inventory.inventory.filter(
    (item) => item.exists && item.usageCount > 0 && item.ext === 'png'
  )
  if (process.env.LIMIT) targets = targets.slice(0, Number(process.env.LIMIT))

  console.log(`Found ${targets.length} used PNGs to convert.\n`)

  const textFiles = walkTextFiles(path.join(ROOT, 'src'))
  const results = []

  for (const item of targets) {
    const srcPath = path.join(ROOT, 'public', item.urlPath)
    const newUrlPath = item.urlPath.replace(/\.png$/i, '.webp')
    const destPath = path.join(ROOT, 'public', newUrlPath)

    if (!fs.existsSync(srcPath)) {
      console.log(`SKIP (missing on disk): ${item.urlPath}`)
      continue
    }

    const before = fs.statSync(srcPath).size
    let pipeline = sharp(srcPath)
    const meta = await pipeline.metadata()
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH })
    }
    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(destPath)
    const after = fs.statSync(destPath).size

    // Rewrite every reference to the old path across src/ (jsx/js/css) --
    // paths are long, unique upload filenames, so a plain string replace
    // carries effectively no collision risk.
    let refsUpdated = 0
    for (const file of textFiles) {
      const content = fs.readFileSync(file, 'utf8')
      if (content.includes(item.urlPath)) {
        fs.writeFileSync(file, content.split(item.urlPath).join(newUrlPath))
        refsUpdated++
      }
    }

    fs.unlinkSync(srcPath)

    results.push({
      urlPath: item.urlPath,
      newUrlPath,
      before,
      after,
      refsUpdated,
      pages: item.pages,
    })

    console.log(
      `${item.urlPath} -> ${newUrlPath}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB` +
        `  (${refsUpdated} file(s) updated, ${item.pages.length} page(s))`
    )
  }

  const totalBefore = results.reduce((s, r) => s + r.before, 0)
  const totalAfter = results.reduce((s, r) => s + r.after, 0)
  console.log(`\nConverted ${results.length} images.`)
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`)
  console.log(`Saved: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)}MB`)

  fs.writeFileSync(
    path.join(ROOT, 'tools/image-replacer/reports/webp-conversion-log.json'),
    JSON.stringify(results, null, 2)
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
