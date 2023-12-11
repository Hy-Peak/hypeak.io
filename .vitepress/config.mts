import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  vite: {
    server: {
      open: true,
        port: 8384,
    }
  },
  title: "Hy-KnowledgeBase",
  description: "Hy-Goods",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
      // ,
      //   {
      //       text: 'JavaSciprt',
      //       items: [
      //       { text: 'Chinese', link: '/JavaScript/index' },
      //       { text: 'ChineseL', link: '/language/japanese' }
      //       ]
      //   }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
