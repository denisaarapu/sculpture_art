import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Configurație optimizată pentru hosting public
export default defineConfig({
  plugins: [
    // Plugin React pentru JSX
    react(),
  ],
  resolve: {
    alias: {
      // Alias-uri pentru importuri simplificate
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    // Optimizări pentru producție
    minify: true,
    sourcemap: false,
  },
  // Nu sunt necesare configurări specifice pentru server în producție
});