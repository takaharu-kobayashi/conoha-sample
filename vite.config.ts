import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
  ? "conoha-sample"
  : "/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://block-storage.c3j1.conoha.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
