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
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/data/services-')) return 'data-services'
          if (id.includes('src/data/comparisons') || id.includes('src/data/substrates')) {
            return 'data-solutions'
          }
          if (id.includes('node_modules')) {
            if (id.includes('@phosphor-icons')) return 'icons'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('gsap') || id.includes('lenis')) return 'gsap'
            if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/')) {
              return 'vendor'
            }
          }
        }
      }
    }
  }
})
