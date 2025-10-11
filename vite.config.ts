import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";
import postcssNesting from "postcss-nesting";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssGlobalData({
          files: ["./src/responsive.css"],
        }),
        postcssCustomMedia(),
        postcssNesting(),
      ],
    },
  },
  plugins: [react()],
});
