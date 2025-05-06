import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// بدلي `your-repo-name` باسم الريبو بتاعك على GitHub
export default defineConfig({
  base: '/',
  plugins: [react()],
})
