import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './css/index.css';
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(Antd);
    },
} satisfies Theme
