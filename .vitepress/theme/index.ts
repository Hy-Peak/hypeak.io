import '../theme/css/index.css';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { Theme } from 'vitepress';
import { EnhanceAppContext } from 'vitepress';

// @ts-ignore
import Layout from './layout.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.use(Antd);
  }
} satisfies Theme;
