## 动画

这个动画演示了隐藏时高度的变化，当然你也可以使用其他的属性，比如宽度，透明度等等。


<script setup lang="ts">
import { TwitterOutlined } from '@ant-design/icons-vue';
import hyIcon from '../../../../components/hyIcon/index.vue';
</script>
<style >
.ant-tag  {

}
.ant-tag .iconfont:before {
    font-size: 16px;
    margin-right: 4px;
    vertical-align: middle;
}
</style>

<a-tag color="">
    <template #icon>
        <em class="iconfont hy-vue"></em>
    </template>
    vue 3.x
</a-tag>
<a-tag color="">
    <template #icon>
        <em class="iconfont hy-antd"></em>
    </template>
    antd-vue 4.x
</a-tag>

```vue
<template>
  <div class="_container">
    <a-card hoverable>
      <div class="title">
        &nbsp;&nbsp;&nbsp;数据导出
      </div>
      <div class="tow-title">
        选择文件导出
      </div>
      <div class="actionArea">
        <a-radio-group v-model:value="value1" button-style="solid">
          <a-space :size="20">
            <a-radio-button value="1">支付宝流水数据导出</a-radio-button>
            <a-radio-button value="2">已卖出宝贝数据导出</a-radio-button>
          </a-space>
        </a-radio-group>
      </div>
      <transition
        name="fade"
        @before-enter="beforeEnter"
        @enter="enterHandle"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="value1 === '1'" class="animates">
          <div class="tow-title">
            选择导出数据
          </div>
          <div class="actionArea">
            <a-radio-group v-model:value="value1" button-style="solid">
              <a-space :size="20">
                <a-radio-button value="1">支付宝财务明细导出</a-radio-button>
                <a-radio-button value="2">支付宝财务总额导出</a-radio-button>
                <a-radio-button value="2">支付宝财务备注导出</a-radio-button>
              </a-space>
            </a-radio-group>
          </div>
        </div>
      </transition>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const value1 = ref('1');

  const beforeEnter = (el) => {
    el.style.height = '0';
  }
  const enterHandle = (el, done) => {
    setTimeout(() => {
      el.style.height = '69px';
      el.addEventListener('transitionend', done);
    }, 0);
  }

  const beforeLeave = (el) => {
    el.style.height = '69px';
  };

  const leave = (el, done) => {
    setTimeout(() => {
      el.style.height = '0';
      el.addEventListener('transitionend', done);
    }, 0);
  };
</script>

<style lang="scss" scoped>
  .animates {
    max-height: 69px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: height .300s;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-to {
    height: 0;
  }

  .actionArea {
    margin: 15px 0;
    padding: 0 1em 0;
  }

  .tow-title {
    font-size: 14px;
  }

  ._container {
    padding: 30px;
  }

  .title {
    font-weight: 400;
    margin-bottom: 1rem;
    position: relative;
    line-height: 45px;
    font-size: 18px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 5px;
      width: 6px;
      height: 30px;
      background: #0089FF;
      vertical-align: unitless(2);
    }
  }
</style>

```
