import {defineConfig} from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      open: true,
      port: 8384,
    }
  },
  title: "Hy",
  description: "hy的知识库",
  srcDir: 'src',
  // 路径
  base: '/hypeak.io/',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '例子', link: '/markdown-examples'}
    ],

    sidebar: {
      "tool":[
        {
          collapsed: true,
          text: '工具函数',
          items: [
            {text: '转换类', link: '/tool/'},
            {text: '工具2', link: '/tool2/'},
          ]
        },
        {
          text: '拓展类函数'
        }
      ]
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2023 by huaiYou'
    }
  }
})
