import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⛳ Tambahkan base path sesuai nama repo GitHub-mu!
export default defineConfig({
  base: '/',
  plugins: [react()],
})
