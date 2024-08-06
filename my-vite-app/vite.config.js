import { defineConfig } from 'vite';

  export default defineConfig({
    esbuild: {
      format: 'esm',
    },
    build: {
      index: 'index.html', 
    },
    server: {
      proxy: {
        '/api': {
          // target: 'http://localhost:5000', 
          target: 'https://gsap-backend.onrender.com',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    }
  });