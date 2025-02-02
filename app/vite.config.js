import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend server
        changeOrigin: true,            // Adjust the `Host` header to match the target
      },
    },
  },
});

