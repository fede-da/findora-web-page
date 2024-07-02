import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/findora-web-page/',  // Set the base URL for your project
  plugins: [react()],  // Add React support
  build: {
    outDir: 'dist' // Default is 'dist', adjust if needed
  }
});