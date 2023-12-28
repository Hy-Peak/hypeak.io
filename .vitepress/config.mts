import { defineConfig } from 'vitepress';

export default defineConfig({
  vite: {
    server: {
      // open: true,
      port: 8384
    }
  },
  title: 'Hy',
  description: 'hy的知识库',
  srcDir: 'src',
  // 路径
  base: '/hypeak.io/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'JavaScript',
        items: [
          {
            text: '基础',
            link: '/jsq/base/'
          },
          {
            text: '进阶',
            link: '/jsq/advanced/'
          },
          {
            text: '框架',
            link: '/jsq/framework/'
          },
          {
            text: '工具',
            link: '/jsq/tool/'
          }
        ]
      }
    ],

    sidebar: {
      '/jsq/tool/': [
        {
          collapsed: true,
          text: '工具函数',
          items: [
            { text: '🛠️杂项', link: '/jsq/tool/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hy-Peak/hypeak.io' }
    ],
    footer: {
      copyright: 'Copyright © 2023-2023 hy'
    }
  }
});
