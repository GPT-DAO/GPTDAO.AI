import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar([
  "/zh/",
  {
    text: "GloboGen",
    icon: "/GloboGen.png",
    prefix: "/zh/globogen/",
    children: [
      "README.md",
      {
        text: "PDF 介绍文档下载",
        icon: "file-pdf",
        link: "pdf-intro.md",
      },
      {
        text: "成功案例",
        icon: "star",
        children: [
          {
            text: "GPTDAO 助力 94AI.com 国际化扩张",
            icon: "fire",
            link: "94ai-case.md"
          },
          {
            text: "Akool",
            icon: "fire",
            link: "akool-case.md"
          }
        ]
      }
    ],
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
        prefix: "/zh/summit/sf2024/",
        children: "structure"
      },
      {
        text: "2024 硅谷生成式人工智能峰会",
        icon: "/assets/images/sv2024.png",
        link: "https://genaisummit.ai/"
      }
    ],
  },
  {
      text: "人工智能新闻",
      icon: "newspaper",
      prefix: "/zh/articles/",
      children: "structure"
  }

]);
