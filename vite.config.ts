import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), imagetools()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  ssgOptions: {
    formatting: 'minify',
    crittersOptions: false,
    script: 'async',
  },
});
