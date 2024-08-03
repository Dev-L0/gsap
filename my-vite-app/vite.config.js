import { defineConfig } from 'vite';

export default defineConfig({
  // Enable ESM support
  esbuild: {
    format: 'esm',
    
  },
  proxy:'http://localhost:3000',
  
 
});