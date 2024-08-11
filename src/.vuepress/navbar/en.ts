import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "GloboGen",
    icon: "/GloboGen.png",
    link: "/globogen/README.md",
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
            link: "https://genaisummit.ai/"
        },
        {
            text: "GenAI Summit Silicon Valley 2024",
            icon: "/assets/images/sv2024.png",
            link: ""
        }
    ],
  },
{
    text: "AI News",
    icon: "newspaper",
    link: "/articles/"
}

]);
