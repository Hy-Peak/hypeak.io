import "../theme/css/index.css";
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';
import { Theme } from "vitepress";

// @ts-ignore
import Layout from "./Layout.vue";


export default {
  Layout,
  enhanceApp({ app }) {
    // 为应用添加属性、方法
    app.use(Antd);
  }
} satisfies Theme;
