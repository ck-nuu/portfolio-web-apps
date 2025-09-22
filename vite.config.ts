import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-web-apps/",  // Important: your repo name here
  resolve: {
    alias: {
      "@/components": "/src/components"
    }
  }
});
