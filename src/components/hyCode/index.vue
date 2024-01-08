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

<script lang="ts" setup>
import { CaretRightOutlined, CopyOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useCopy } from '../../utlis/tool';
import { svgCode } from '../../tool/assets/code/code';


import { onMounted, ref, inject } from 'vue';
// import   Prism  from 'prismjs';
defineProps({
  code: {
    type: String,
    default: ''
  }
});
const codeHeight = ref('');
onMounted(async () => {
  const Prism: any = inject('Prismjs');
  console.log(Prism);
  codeHeight.value = Prism.highlight(svgCode, Prism.languages.javascript, 'javascript');
  Prism.highlightAll();
});
const copyFun = async (str: string) => {
  const copyValFun = await useCopy(str);
  copyValFun && message.success('🎉 复制成功!');
};
</script>

<style scoped>
@import 'prismjs/themes/prism-dark.css';

.hy-code {
  margin: 1.5rem 0;
}
</style>
