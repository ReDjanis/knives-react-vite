import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      fonts: "/src/fonts",
      pages: "/src/pages",
      styles: "/src/styles",
    }
  },
})
