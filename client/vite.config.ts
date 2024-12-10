import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // This ensures correct routing on Vercel
  build: {
    outDir: 'dist', // Ensure Vercel knows to build to the 'dist' folder
  }
})
