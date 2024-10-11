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
        include: ['@splidejs/react-splide'], 
      },
      ssr: {
        noExternal: ['@splidejs/react-splide'], 
      }
    }
  });
  