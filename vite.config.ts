import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@axios': path.resolve(__dirname, './src/utils/apis/axios.ts'),
      '@actions': path.resolve(__dirname, './src/utils/actions'),
      '@apitypes': path.resolve(__dirname, './src/utils/types'),
      '@transformers': path.resolve(__dirname, './src/utils/transformers'),
      '@apiEndpoints': path.resolve(__dirname, './src/utils/apis/apiEndpoints'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
