// Dev-only Vite plugin that keeps public/resource-usage-db.json fresh:
// - runs scan.js once when the dev server boots
// - watches public/wp-content and re-runs the scan (debounced) whenever an
//   image is added, removed, or modified
// - exposes /api/rescan-images for the "Rescan now" button in the app
// - pushes a `resource-usage:updated` event over the Vite websocket so an
//   open /resource-usage tab refetches without a manual reload
//
// Every scan (boot, watcher, manual button) runs through the same `queueScan`
// promise chain so at most one scan.js child process ever writes the report
// files at a time -- Windows throws transient "file busy" errors if two
// processes race to write the same path.
import { execFile } from 'node:child_process'
import { watch } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SCAN_SCRIPT = path.join(__dirname, 'scan.js')
const APP_ROOT = path.resolve(__dirname, '..', '..')
const WP_CONTENT_DIR = path.join(APP_ROOT, 'public', 'wp-content')

export default function imageScanPlugin() {
  let logger
  let queue = Promise.resolve()
  let debounceTimer = null

  function runScanOnce(reason) {
    logger?.info(`[image-scan] rescanning (${reason})...`, { timestamp: true })
    return new Promise((resolve, reject) => {
      execFile(process.execPath, [SCAN_SCRIPT], { cwd: APP_ROOT }, (err) => {
        if (err) {
          logger?.error(`[image-scan] rescan failed: ${err.message}`)
          reject(err)
          return
        }
        logger?.info(`[image-scan] rescanned (${reason})`, { timestamp: true })
        resolve()
      })
    })
  }

  function queueScan(reason) {
    const run = queue.then(() => runScanOnce(reason))
    // Keep the chain alive even after a failed scan so later requests still run.
    queue = run.catch(() => {})
    return run
  }

  function broadcastUpdate(server) {
    server.ws.send({ type: 'custom', event: 'resource-usage:updated', data: { generatedAt: new Date().toISOString() } })
  }

  return {
    name: 'image-scan',
    apply: 'serve',
    async configureServer(server) {
      logger = server.config.logger
      try {
        await queueScan('dev server start')
      } catch {
        // already logged in runScanOnce; the app falls back to whatever
        // resource-usage-db.json last had on disk (or a 404 if none yet)
      }

      server.middlewares.use('/api/rescan-images', (req, res) => {
        queueScan('manual rescan')
          .then(() => {
            broadcastUpdate(server)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true, generatedAt: new Date().toISOString() }))
          })
          .catch((err) => {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err.message }))
          })
      })

      try {
        const watcher = watch(WP_CONTENT_DIR, { recursive: true }, () => {
          clearTimeout(debounceTimer)
          debounceTimer = setTimeout(() => {
            queueScan('wp-content changed').then(() => broadcastUpdate(server)).catch(() => {})
          }, 500)
        })
        server.httpServer?.once('close', () => watcher.close())
      } catch (err) {
        logger.warn(`[image-scan] could not watch wp-content/ for changes: ${err.message}`)
      }
    },
  }
}
