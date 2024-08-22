import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
      [
          "script",
          "defer",
        {
          "src": "https://hello.gptdao.ai/script.js",
          "data-website-id": "080fd6c3-92d9-46e2-9b4a-d46a6f17c682"
        }
      ]
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "GPTDAO",
      description: "Home page of GPTDAO",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GPTDAO",
      description: "GPTDAO 主页",
    },
  },

  plugins: [
    googleAnalyticsPlugin({
      id: "G-H41ZP4WKBW",
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
