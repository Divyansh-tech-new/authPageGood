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
  server: {
    host: "0.0.0.0", // Allows access from any device (including Windows)
    port: 5173,      // Ensure the port is open
    strictPort: true, // Prevents fallback to another port
  },
});
