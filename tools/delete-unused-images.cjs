// Deletes the files in tools/confirmed-unused.json -- a list independently
// re-verified (see conversation/commit history) against src/**, public/assets/**,
// public/wp-content/litespeed/css/**, and index.html, because the image-inventory
// scanner's own usageCount had a ~30% false-positive rate for files referenced via
// generic prop names (e.g. `image=`) or CSS url(...) it doesn't statically parse.
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'confirmed-unused.json'), 'utf8'))

let deleted = 0
let bytes = 0
let missing = 0

for (const item of list) {
  const filePath = path.join(ROOT, 'public', item.urlPath)
  if (!fs.existsSync(filePath)) {
    missing++
    continue
  }
  bytes += fs.statSync(filePath).size
  fs.unlinkSync(filePath)
  deleted++
}

console.log(`Deleted ${deleted} files (${missing} already missing).`)
console.log(`Freed ${(bytes / 1024 / 1024).toFixed(1)}MB.`)
