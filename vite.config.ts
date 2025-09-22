import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD

// Change this to your GitHub repo name
const repoName = "portfolio-web-apps";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // ensures correct paths on GitHub Pages
=======

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-web-apps/",  // Important: your repo name here
  resolve: {
    alias: {
      "@/components": "/src/components"
    }
  }
>>>>>>> 3e966dd1e21f8a53be5205b63c3c2046705bc276
});
