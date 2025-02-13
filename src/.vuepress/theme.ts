import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import * as buffer from "node:buffer";

export default hopeTheme({
  hostname: "https://gptdao.ai",

  author: {
    name: "GPTDAO",
    url: "https://gptdao.ai",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  repo: "",

  docsDir: "src",

  blog: {
    medias: {
      LinkedIn: "https://www.linkedin.com/company/gptdao/posts/?feedView=all",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "The largest Generative AI DAO in the world",

      displayFooter: true,

      blog: {
        description: `Founded in late 2022 and headquartered in Silicon Valley, GPTDAO is the largest GenAI community in the U.S., uniting over 20,000 global tech elites, investors, and industry leaders to advance AI innovation. Since 2023, GPTDAO has hosted three GenAI Summit events—one of North America's top GenAI conferences—in partnership with Microsoft, Amazon, and Tesla, alongside 100+ tech forums with 50,000+ attendees. Notable speakers include the California Secretary of State, Glean’s Founder & CEO ($1B+ funded), and Llama 2 & 3’s core developers. With its global network and industry collaborations, GPTDAO is accelerating AI adoption, innovation, and ecosystem growth worldwide.`
      },

      metaLocales: {
        editLink: "Edit this page",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "全球最大的生成式 AI 社区",

      displayFooter: true,

      blog: {
        description: `GPTDAO成立于2022年底，总部位于硅谷，致力于打造全球领先的生成式AI（GenAI）社区与创新平台。如今，社区已汇聚超过20,000名成员，涵盖硅谷及全球范围内的科技精英、顶级投资人及各行业领军人物。作为全美规模最大的GenAI社区，GPTDAO的会员网络遍布全球，持续推动AI技术的应用与发展。自2023年以来，GPTDAO已成功举办三场GenAI Summit——北美最具影响力的生成式AI峰会，并携手微软、亚马逊、特斯拉等行业巨头共同推动AI生态建设。此外，社区还组织了100余场高端科技论坛，总参会人数超过50,000人。历届峰会与活动吸引了众多重量级嘉宾，包括加州参政部长、融资超十亿美元的Glean创始人兼CEO、Llama 2 & 3的核心研发者等，为全球AI从业者提供深度交流与合作机会。凭借独特的社区优势和资源，GPTDAO正加速构建全球AI生态，推动生成式AI技术的发展与应用，赋能下一代科技创新。`
      },

      // page meta
      metaLocales: {
        editLink: "编辑此页",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard", "PDF", "VPBanner", "Share"],

      componentOptions: {
        share: {
          services: ["twitter", "linkedin", "facebook", "messenger", "telegram", "reddit", "weibo", "buffer" ]
        }
      }
    },

    // These features are enabled for globogen, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/globogen/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
