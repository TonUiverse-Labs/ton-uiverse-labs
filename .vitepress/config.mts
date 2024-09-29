import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toniverse Labs",
  description: `Uiverse suggest that our studio is a global center for TON development. Labs reflects our team's exploration of cutting-edge technologies and solutions`,
  base: '/toniverse/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ton中文课程', link: '/ton-course/1/1.md' },
    ],

    sidebar: [
      {
        text: 'Ton中文课程',
        items: [
          {
            text: '第一课',
            link: '/ton-course/1/index.md',
            items: [
              {
                text: '介绍TON区块链的特点与优势',
                link: '/ton-course/1/1.md',
              },
              {
                text: '实战案例介绍-NFT Market Place',
                link: '/ton-course/1/2.md',
              },
              {
                text: '工具和开发环境准备（Telegram Bot、TON开发工具）',
                link: '/ton-course/1/2.md',
              },
            ],
          },
          {
            text: '第二课',
            items: [
              {
                text: 'Telegram用户注册与邀请功能实现',
                link: '/ton-course/2/1.md',
              },
              {
                text: '存储用户注册信息并统计邀请数',
                link: '/ton-course/2/2.md',
              },
            ],
          },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TonUiverse-Labs' }
    ]
  }
})
