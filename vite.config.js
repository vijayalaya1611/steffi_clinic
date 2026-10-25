import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

process.env.RAYON_NUM_THREADS = process.env.RAYON_NUM_THREADS || '4'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
