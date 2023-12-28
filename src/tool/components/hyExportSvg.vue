<template>
  <div v-if="true" :class="$style.icons">
    <div>
      <a-tooltip title="svg">
        <svg id="svg" @click="svgClickHandle">
          <use xlink:href="#webstorm"></use>
          <symbol id="webstorm" fill="none" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="webstorm_webstorm_svg__a"
                gradientUnits="userSpaceOnUse"
                x1="25.068"
                x2="43.183"
                y1="1.46"
                y2="66.675"
              >
                <stop offset=".285" stop-color="#07C3F2"></stop>
                <stop offset=".941" stop-color="#087CFA"></stop>
              </linearGradient>
              <linearGradient
                id="webstorm_webstorm_svg__b"
                gradientUnits="userSpaceOnUse"
                x1="30.72"
                x2="61.365"
                y1="9.734"
                y2="54.671"
              >
                <stop offset=".14" stop-color="#FCF84A"></stop>
                <stop offset=".366" stop-color="#07C3F2"></stop>
              </linearGradient>
              <linearGradient
                id="webstorm_webstorm_svg__c"
                gradientUnits="userSpaceOnUse"
                x1="61.082"
                x2="65.106"
                y1="15.29"
                y2="29.544"
              >
                <stop offset=".285" stop-color="#07C3F2"></stop>
                <stop offset=".941" stop-color="#087CFA"></stop>
              </linearGradient>
            </defs>
            <path
              d="M9.406 63.292 0 7.365 17.427.073l11.156 6.635L38.792 1.24l21.291 8.166L48.125 70 9.406 63.292Z"
              fill="url(#webstorm_webstorm_svg__a)"
            ></path>
            <path
              d="M70 23.698 60.958 1.385 44.552 0 19.25 24.281l6.854 31.354 12.688 8.896L70 46.011l-7.656-14.292L70 23.698Z"
              fill="url(#webstorm_webstorm_svg__b)"
            ></path>
            <path
              d="m56 20.344 6.344 11.375L70 23.698 64.385 9.844 56 20.344Z"
              fill="url(#webstorm_webstorm_svg__c)"
            ></path>
            <path d="M56 14H14v42h42V14Z" fill="#000"></path>
            <path
              d="M34.417 48.65h-15.75v2.683h15.75V48.65ZM34.16 19.25l-2.38 9.17-2.66-9.17h-2.66l-2.66 9.17-2.38-9.17h-3.64L22.26 35h2.94l2.59-9.1 2.52 9.1h3.01l4.48-15.75h-3.64ZM38.5 32.76l2.03-2.45c1.4 1.19 2.94 1.89 4.69 1.89 1.4 0 2.31-.56 2.31-1.47v-.07c0-.91-.56-1.33-3.15-2.03-3.15-.84-5.25-1.68-5.25-4.83v-.07c0-2.87 2.31-4.76 5.53-4.76 2.31 0 4.27.7 5.88 2.03l-1.82 2.59c-1.4-.98-2.8-1.54-4.13-1.54s-2.03.63-2.03 1.4v.07c0 1.05.7 1.4 3.43 2.1 3.22.84 5.04 1.96 5.04 4.76v.07c0 3.15-2.38 4.9-5.81 4.9-2.45-.07-4.83-.91-6.72-2.59Z"
              fill="#FFF"
            ></path>
          </symbol>
        </svg>
      </a-tooltip>
    </div>
    <div style="min-width: 100px;text-align: center">---></div>
    <div>
      <a-tooltip title="png">
        <img alt="webstorm" src="../assets/img/webstorm.png" />
      </a-tooltip>
    </div>
  </div>
  <a-row>
    <a-col
      :span="24"
    >
      <a-card
        hoverable
        title="例子"
      >
        <a-steps
          :current="stepsControl.current"
          :items="stepsItem"
          size="small"
          style="margin-bottom: 1rem;"
        ></a-steps>
        <div style="min-height: 150px;">
          <div v-show="stepsControl.current === 0" class="exhibitArea">
            <a-textarea v-model:value="stepsControl.svgDomCode" placeholder="点击左上角的图标,获取示例代码"
                        style="height: 150px; resize: none"></a-textarea>
          </div>
          <div v-show="stepsControl.current === 1" class="exhibitArea">
            <a-form :label-col="{span:3}">
              <a-form-item label="width">
                <a-input-number v-model:value="stepsControl.conversion.width" :min="0" :max="1000" :step="1"
                                style="width: 100%;"></a-input-number>
              </a-form-item>
              <a-form-item label="height">
                <a-input-number v-model:value="stepsControl.conversion.height" :min="0" :max="1000" :step="1"
                                style="width: 100%;"></a-input-number>
              </a-form-item>
            </a-form>
          </div>
          <div v-show="stepsControl.current === 2" class="exhibitArea">
            <a-row justify="center" style="margin-top: 3rem;">
              <a-col>
                <CheckCircleOutlined style="font-size: 3.5rem;color: #96ce24" />
              </a-col>
            </a-row>
            <div class="successTitle">转换成功</div>
            <a-row :gutter="15" justify="center" style="margin-top: 1rem;">
              <a-col>
                <a-button type="primary" @click="downloadPng">下载</a-button>
              </a-col>
              <a-col>
                <a-button @click="returnFirst">再来一个</a-button>
              </a-col>
            </a-row>
          </div>
        </div>
        <a-row :gutter="15" justify="end" style="margin-top: 1rem;">
          <a-col>
            <a-button v-if="stepsControl.current !== 0 " @click="previousHandle">PREVIOUS</a-button>
          </a-col>
          <a-col>
            <a-button :disabled="stepsControl.display" v-if="stepsControl.current < 2" type="primary" @click="nextHandle">NEXT</a-button>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>
<style lang="less" scoped>
.exhibitArea {
  height: 100%;
}

.successTitle {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1rem;
}

:deep(.anticon.anticon-copy) {
  cursor: pointer !important;
}

:deep(.ant-card-body) {
  //padding: .4rem;
}

:deep([fill='currentColor']) {
  cursor: pointer !important;
}
</style>

<script lang="ts" setup>
import { CheckCircleOutlined } from '@ant-design/icons-vue';
import { svgCode } from '../assets/code/code';
import hyCode from '../../components/hyCode/index.vue';
import { ref, reactive, watch, watchEffect } from 'vue';
import { message } from 'ant-design-vue';

const baseUrl = '/hypeak.io/' + 'tool/assets/img/';
console.log(baseUrl);
const stepsControl = reactive({
  current: 0,
  svgDomCode: '',
  conversion: {
    height: 200,
    width: 200
  },
  display: true,
  pngUrl: ''
});
const stepsItem = [
  {
    title: '填写Svg代码'
  },
  {
    title: '设置属性'
  },
  {
    title: '下载'
  }
];

watchEffect(() => {
  if (stepsControl.current === 0) {
    stepsControl.display = !stepsControl.svgDomCode;
  } else if (stepsControl.current === 1) {
    stepsControl.display = !stepsControl.conversion.height && !stepsControl.conversion.width;
  }
  // console.log(stepsControl.svgDomCode);.
});

const previousHandle = () => {
  if (stepsControl.current === 4) {
    stepsControl.current = 3;
    return;
  }
  stepsControl.current--;
};

const nextHandle = () => {
  if (stepsControl.current === 2) {
    return;
  }
  stepsControl.current++;
};

const returnFirst = () => {
  stepsControl.current = 0;
  stepsControl.conversion = {
    height: 200,
    width: 200
  };
  stepsControl.pngUrl = '';
  stepsControl.svgDomCode = '';
};


const downloadPng = () => {
  // 使用svgDomCode生成svg
  let svgElement:SVGSVGElement;
  try {
    svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.innerHTML = stepsControl.svgDomCode.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
  }catch (e) {
    message.error('svg代码有误');
    return;
  }
  // 将svg转换成png
  convertSvgToPng(svgElement, stepsControl.conversion.width, stepsControl.conversion.height, (png) => {
    stepsControl.pngUrl = png;
    const a = document.createElement('a');
    a.href = png;
    a.download = 'svg.png';
    a.click();
  });
};
const  convertSvgToPng = (svgElement:SVGSVGElement, width:number, height:number, callback:(png:string)=>void) =>  {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // 将 SVG 转换成 DataURL
  const data = new XMLSerializer().serializeToString(svgElement);
  const svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
  const url = URL.createObjectURL(svg);

  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    const png = canvas.toDataURL('image/png');
    callback(png);
  };
  img.src = url;
}

const svgClickHandle = () => {
  if (stepsControl.current !== 0) {
    return;
  }
  const svg = document.getElementById('svg');
  const svgDomCode = svg?.outerHTML;
  stepsControl.svgDomCode = svgDomCode || '';
};

</script>

<style lang="less" module>
.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0 7rem;
  }

  svg {
    width: 150px;
  }

  img {
    max-width: 150px;
    max-height: 150px;
  }
}
</style>
