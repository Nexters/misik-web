import path from "path";

import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss" as *;
          @use "@/styles/_mixins.scss" as *;
        `,
      },
    },
  },
});
