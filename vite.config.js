import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageScanPlugin from './tools/image-replacer/vite-plugin-image-scan.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageScanPlugin()],
  server: {
    watch: {
      // The image-scan plugin rewrites these on every rescan; Vite doesn't
      // recognize them as modules and falls back to a full page reload,
      // which would wipe /resource-usage's filter state every time any
      // wp-content image changes. The plugin's own `resource-usage:updated`
      // event already refreshes the table without losing that state.
      ignored: ['**/tools/image-replacer/reports/**', '**/public/resource-usage-db.json'],
    },
  },
})
