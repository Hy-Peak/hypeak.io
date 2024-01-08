import { defineConfig } from 'vitepress';

export default defineConfig({
  vite: {
    server: {
      // open: true,
      port: 8384
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // node_modules 下的文件分割到 vendor 块中
              return 'vendor';
            }
          }
        }
      }
    }
  },
  title: 'Hy',
  description: 'hy的知识库',
  srcDir: 'src',
  // 路径
  // base: '../',
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
      '/html/': [
        {
          text: '言',
          link: '/html/'
        },
        {
          collapsed: false,
          text: '标签',
          items: [
            {
              text: '常用',
              link: '/html/commonlyUsed/'
            },
            {
              text: '冷门',
              link: '/html/unpopular/'
            },
            {
              text: '不知道的属性',
              link: '/html/unknown/'
            }
          ]
        }
      ],
      '/tool/': [
        {
          collapsed: true,
          text: '工具函数',
          items: [
            { text: '🛠️杂项', link: '/tool/' }
          ]
        }
      ],
      '/js/framework/': [
        {
          collapsed: true,
          text: 'Vue',
          items: [
            {
              text: '概览',
              link: '/js/framework/vue/'
            },
            {
              text: 'animateBase', link: '/js/framework/vue/animate/'
            }
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
