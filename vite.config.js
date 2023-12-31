import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
  plugins: [react(), eslint()],
  base: './',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  esbuild: {
    loader: 'jsx'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
})
