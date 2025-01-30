import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  server: {
    port: 5174, // استخدم أي رقم آخر غير 5173
  },
  plugins: [react()]
});
