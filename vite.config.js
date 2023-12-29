import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy-policy/index.html'),
        updates: resolve(__dirname, 'update-change-policy/index.html'),
        terms: resolve(__dirname, 'terms-conditions/index.html'),
      }
    }
  }
})
