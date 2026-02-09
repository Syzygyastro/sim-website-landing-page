import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Dev server settings (only used for `npm run dev`)
  server: {
    host: true,                 // same as 0.0.0.0 (allows external access)
    port: 5173,                 // dev port (local)
    open: false,                // don't try to open a browser on Railway
    allowedHosts: true,
  },

  // Preview server settings (used for `vite preview`, i.e. production on Railway)
  preview: {
    host: true,                 // 0.0.0.0
    port: Number(process.env.PORT) || 4173, // Railway injects PORT
    strictPort: true,           // fail loudly if port can't be used
  },
});
