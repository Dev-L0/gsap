import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  resolve: {
    alias: {
      gsap: '/node_modules/gsap/index.js',
    },
  },
});