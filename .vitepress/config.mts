import { defineConfig } from 'vitepress';

export default defineConfig({
  vite: {
    server: {
      open: true,
      port: 8384
    },
    resolve: {
      alias: {
        '@/': 'src/'
      }
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
            link: '/js/base/'
          },
          {
            text: '进阶',
            link: '/js/advanced/'
          },
          {
            text: '框架',
            link: '/js/framework/'
          },
          {
            text: '工具',
            link: '/js/tool/'
          }
        ]
      }
    ],

    sidebar: {
      'js/tool': [
        {
          collapsed: true,
          text: '工具函数',
          items: [
            { text: '🛠️杂项', link: '/tool/' },
            { text: '工具2', link: '/tool2/' }
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
