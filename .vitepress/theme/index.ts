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
    console.log('enhanceApp', app);
    console.log('router', router);
    console.log('siteData', siteData.value);
    // router
    // 为应用添加属性、方法
    app.use(Antd);
  },
  setup() {
    console.log('setup');
  }
} satisfies Theme;
