import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // JavaScript and CSS are minified for production (esbuild is the default minifier)
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // React is kept in its own file, so it is cached separately from the app code
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
