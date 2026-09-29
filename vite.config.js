import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        'admin-signup': resolve(__dirname, 'admin-signup.html')
      }
    }
  },
  server: {
    port: 3000
  }
})
