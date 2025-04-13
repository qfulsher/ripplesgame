import { rspack } from '@rspack/core';
import { defineConfig } from "@rspack/cli";
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  mode: isProduction ? "production" : "development",
  plugins: [new rspack.HtmlRspackPlugin({
    template: "./index.template.html",
    filename: "index.html",
    inject: "body",
    minify: isProduction,
    scriptLoading: "blocking",
  })],

  entry: {
    main: "./canvas.js",
  },
});
