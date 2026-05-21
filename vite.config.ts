import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.mp4'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          icons: ['@phosphor-icons/react']
        }
      }
    }
  }
})
