import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "GloboGen",
    icon: "/GloboGen.png",
    link: "/zh/globogen/README.md",
  },
  {
    text: "生成式人工智能峰会",
    icon: "person-dots-from-line",
    children: [
      {
        text: "2023 硅谷生成式人工智能峰会",
        icon: "/assets/images/sv2023.png",
        link: "https://sv2023.genaisummit.ai/"
      },
      {
        text: "2024 旧金山生成式人工智能峰会",
        icon: "/assets/images/sf2024.png",
        link: "https://sf2024.genaisummit.ai/"
      },
      {
        text: "2024 硅谷生成式人工智能峰会",
        icon: "/assets/images/sv2024.png",
        link: "https://genaisummit.ai/"
      }
    ],
  },
  {
    text: "AI 新闻",
    icon: "newspaper",
    link: "/zh/articles/"
  }

]);