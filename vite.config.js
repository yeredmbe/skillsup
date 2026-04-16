import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// PWA plugin disabled due to Vite 8 peer dependency conflicts. 
// Using manual manifest and service worker configuration instead.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
})
