import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Serve from domain root when building for production (custom domain)
  base: mode === 'production' ? '/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    mock: true,
  }
}))
