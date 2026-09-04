import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// GitHub Pages serve o site em https://leetmoura.github.io/portfolio/
// Se um dia migrar para domínio próprio ou para o repo <user>.github.io,
// troque `base` para '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
});
