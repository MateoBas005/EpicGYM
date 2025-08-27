import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // Base de la URL para el despliegue de GitHub Pages
  base: '/EpicGYM/',
  plugins: [react()],
})
