import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar([
  "/",
  {
    text: "GloboGen",
    icon: "/GloboGen.png",
    prefix: "/globogen/",
    children: [
      "README.md",
      {
        text: "PDF Intro Download",
        icon: "file-pdf",
        link: "pdf-intro.md",
      },
      {
        text: "Success Stories",
        icon: "star",
        children: [
          {
            text: "94AI.com International Expansion with GPTDAO Support",
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
    text: "GenAI Summit",
    icon: "person-dots-from-line",
    children: [
      {
        text: "GenAI Summit Silicon Valley 2023",
        icon: "/assets/images/sv2023.png",
        link: "https://sv2023.genaisummit.ai/"
      },
      {
        text: "GenAI Summit San Francisco 2024",
        icon: "/assets/images/sf2024.png",
        prefix: "/summit/sf2024/",
        children: "structure"
      },
      {
        text: "GenAI Summit Silicon Valley 2024",
        icon: "/assets/images/sv2024.png",
        link: "https://genaisummit.ai/"
      }
    ],
  },
  {
    text: "AI News",
    icon: "newspaper",
    prefix: "/articles/",
    children: "structure"
  }

]);
