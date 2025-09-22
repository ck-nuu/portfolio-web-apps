import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change this to your GitHub repo name
const repoName = "portfolio-web-apps";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // ensures correct paths on GitHub Pages
});
