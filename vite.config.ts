import path from "path";

import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), vitePluginSvgr()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss";
          @use "@/styles/_mixins.scss";
        `,
      },
    },
  },
});
