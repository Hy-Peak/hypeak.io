<template>
  <div class="hy-code">
    <a-collapse collapsible="header">
      <template #expandIcon="{ isActive }">
        <caret-right-outlined :rotate="isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1">
        <template #header>Code</template>
        <template #extra>
          <a-tooltip title="copy">
            <CopyOutlined @click="copyFun(code)" />
          </a-tooltip>
        </template>
        <pre>
        <code>
          <div v-html="codeHeight"></div>
        </code>
      </pre>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import { CaretRightOutlined, CopyOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useCopy } from '../../../utlis/tool';
import Prism from 'prismjs';
import { svgCode } from '../../tool/assets/code/code';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-dark.css';

defineProps({
  code: {
    type: String,
    default: ''
  }
});

const codeHeight = Prism.highlight(svgCode, Prism.languages.javascript, 'javascript');
Prism.highlightAll();
const copyFun = async (str: string) => {
  const copyValFun = await useCopy(str);
  copyValFun && message.success('🎉 复制成功!');
};
</script>

<style scoped>
.hy-code {
  margin: 1.5rem 0;
}
</style>
