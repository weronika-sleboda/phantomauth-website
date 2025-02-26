import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/auth': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  },
  build: {
    minify: 'esbuild',
    sourcemap: false
  },
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom', 'axios']
      }
    }
  }
})
