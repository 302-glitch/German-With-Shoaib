import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/German-With-Shoaib/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
});