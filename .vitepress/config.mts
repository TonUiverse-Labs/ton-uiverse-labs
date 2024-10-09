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
      { text: 'Ton中文课程', link: '/ton-course/1/index.md' },
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
                link: '/ton-course/1/介绍TON区块链的特点与优势.md',
              },
              {
                text: '实战案例介绍-NFT Market Place',
                link: '/ton-course/1/实战案例介绍-NFT Market Place.md',
              },
              {
                text: '工具和开发环境准备（Telegram Bot、TON开发工具）',
                link: '/ton-course/1/工具和开发环境准备（Telegram Bot、TON开发工具）.md',
              },
            ],
          },
          {
            text: '第二课',
            link: '/ton-course/2/index.md',
            items: [
              {
                text: 'Telegram用户注册与邀请功能实现',
                link: '/ton-course/2/Telegram用户注册与邀请功能实现.md',
              },
              {
                text: '存储用户注册信息并统计邀请数',
                link: '/ton-course/2/存储用户注册信息并统计邀请数.md',
              },
            ],
          },
          {
            text: '第三课',
            link: '/ton-course/3/index.md',
            items: [
              {
                text: '实现排行榜的前后端数据交互',
                link: '/ton-course/3/实现排行榜的前后端数据交互.md',
              },
              {
                text: '获取并展示Telegram用户的头像',
                link: '/ton-course/3/获取并展示Telegram用户的头像.md',
              },
              {
                text: '实现用户分数或邀请数的排行榜展示',
                link: '/ton-course/3/实现用户分数或邀请数的排行榜展示.md',
              },
            ],
          },
          {
            text: '第四课',
            link: '/ton-course/4/index.md',
            items: [
              {
                text: '介绍智能合约的基本概念',
                link: '/ton-course/4/介绍智能合约的基本概念.md',
              },
              {
                text: 'TON链上的智能合约开发与部署',
                link: '/ton-course/4/TON链上的智能合约开发与部署.md',
              },
              {
                text: '前端项目集成与合约对接',
                link: '/ton-course/4/前端项目集成与合约对接.md',
              },
            ],
          },
          {
            text: '第五课',
            link: '/ton-course/5/index.md',
            items: [
              {
                text: '介绍如何创建前端项目并与智能合约对接',
                link: '/ton-course/5/介绍如何创建前端项目并与智能合约对接.md',
              },
              {
                text: '通过前端进行NFT查询、展示和交互',
                link: '/ton-course/5/通过前端进行NFT查询、展示和交互.md',
              },
              {
                text: 'NFT Mint功能实现与发布',
                link: '/ton-course/4/NFT Mint功能实现与发布.md',
              },
            ],
          },
          {
            text: '第六课',
            link: '/ton-course/6/index.md',
            items: [
              {
                text: '实现NFT的Mint功能，让用户能够通过平台铸造NFT',
                link: '/ton-course/6/实现NFT的Mint功能，让用户能够通过平台铸造NFT.md',
              },
              {
                text: '使用TON钱包完成NFT交易',
                link: '/ton-course/6/使用TON钱包完成NFT交易.md',
              },
              {
                text: '将项目部署并展示给用户',
                link: '/ton-course/6/将项目部署并展示给用户.md',
              },
            ],
          },],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TonUiverse-Labs' }
    ]
  }
})
