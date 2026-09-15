import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api requests to the backend in server/ during local dev,
    // so the frontend can just call fetch('/api/...') with no CORS setup.
    // In production, set VITE_API_URL to your deployed backend's origin.
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
