import { rspack } from '@rspack/core';
import { defineConfig } from "@rspack/cli";

export default defineConfig({
  plugins: [new rspack.HtmlRspackPlugin({
      template: "./index.template.html",
      filename: "index.html",
      inject: "body",
      minify: true,
      scriptLoading: "blocking",
  })],

  entry: {
    main: "./canvas.js",
  },
});
