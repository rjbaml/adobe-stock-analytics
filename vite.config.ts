import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/adobe-stock-analytics/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});