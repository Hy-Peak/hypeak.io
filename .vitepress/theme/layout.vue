<link rel="stylesheet" href="../../node_modules/prismjs/themes/prism-funky.css">
<template>
  <a-config-provider :theme="themeConfig">
    <a-watermark content="HyGod" v-bind="{ gap: [400, 200] }">
      <DefaultTheme.Layout />
    </a-watermark>
  </a-config-provider>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, provide, ref, watch } from 'vue';
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import { theme } from 'ant-design-vue';

const themeConfig = ref<ThemeConfig>({});
const { isDark } = useData();

watch(
  isDark,
  (val) => {
    themeConfig.value = {
      algorithm: !val ? theme.defaultAlgorithm : theme.darkAlgorithm,
      token: {
        colorPrimary: '#ff0072'
      }
    };
  },
  {
    immediate: true
  }
);

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    {
      clipPath: isDark.value ? clipPath.reverse() : clipPath
    },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  );
});
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
