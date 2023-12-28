import '../theme/css/index.css';
import 'ant-design-vue/dist/reset.css';
import { Theme } from 'vitepress';
import { EnhanceAppContext } from 'vitepress';
import Antd from 'ant-design-vue';
import  Prismjs from 'prismjs';
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-dark.css';

// @ts-ignore
import Layout from './layout.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.provide('Prismjs', Prismjs);
    app.use(Antd);
  }
} satisfies Theme;
