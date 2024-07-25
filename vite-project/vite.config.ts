import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// Si decides usar createHtmlPlugin, asegúrate de que esté instalado
// import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      css:{
        additionalData: '@import "@/styles/global.css";'
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            return 'vendor';
          }
        }
      }
    }
  }
});
