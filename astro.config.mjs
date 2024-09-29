import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    integrations: [
      react({
        include: ['**/react/*'],
        experimentalReactChildren: true,
      }),
      tailwind(),
    ],
    vite: {
      plugins: [glsl()],
      optimizeDeps: {
        include: ['@splidejs/react-splide'],  // Pre-bundle specific packages
      },
      ssr: {
        noExternal: ['@splidejs/react-splide'],  // Force Vite to handle this as an ES module
      }
    }
  });
  