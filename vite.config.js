import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    watch: {
      usePolling: true,
      interval: 1000,
      binaryInterval: 1000,
      depth: 99,
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    hmr: {
      overlay: true,
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
  },
})

