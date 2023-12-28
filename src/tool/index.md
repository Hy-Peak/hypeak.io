---
title: Hy-工具类
---

# svg下载

在逛各种站点时. 看到了好看的图标想保存(收藏嗷). 但是发现没有链接的时候 😁


<script setup>

import Index from './components/hyExportSvg.vue';
import { svgCode } from './assets/code/code';
import hyCode  from '../components/hyCode/index.vue';
</script>

<Index/>
-----
整理下思路:
* 通过js获取svg的内容
* 通过canvas转换成png
* 通过a标签下载

<hyCode :code="svgCode"/>

