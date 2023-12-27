---
title: Hy-工具类
---

# svg下载

在逛各种站点时. 看到了好看的图标想保存(收藏嗷). webstorm的官网让我眼前一亮. 图标是svg格式没法直接下载就很😓. 行吧直接行动起来


<script setup>
import Index from './components/hyExportSvg.vue';
</script>

<Index/>


[//]: # (```js)

[//]: # (   /**)

[//]: # (     * 把 svg 转换 png)

[//]: # (     * @param svgElement)

[//]: # (     * @param width)

[//]: # (     * @param height)

[//]: # (     */)

[//]: # (    function convertSvgToPng&#40;svgElement, width, height, callback&#41; {)

[//]: # (        const canvas = document.createElement&#40;'canvas'&#41;;)

[//]: # (        canvas.width = width;)

[//]: # (        canvas.height = height;)

[//]: # (        const ctx = canvas.getContext&#40;'2d'&#41;;)

[//]: # (    )
[//]: # (        // 将 SVG 转换成 DataURL)

[//]: # (        const data = new XMLSerializer&#40;&#41;.serializeToString&#40;svgElement&#41;;)

[//]: # (        const svg = new Blob&#40;[data], {type: 'image/svg+xml;charset=utf-8'}&#41;;)

[//]: # (        const url = URL.createObjectURL&#40;svg&#41;;)

[//]: # (    )
[//]: # (        const img = new Image&#40;&#41;;)

[//]: # (        img.onload = function &#40;&#41; {)

[//]: # (            ctx.drawImage&#40;img, 0, 0&#41;;)

[//]: # (            URL.revokeObjectURL&#40;url&#41;;)

[//]: # (            const png = canvas.toDataURL&#40;'image/png'&#41;;)

[//]: # (            callback&#40;png&#41;;)

[//]: # (        };)

[//]: # (        img.src = url;)

[//]: # (    })

[//]: # (    )
[//]: # (    document.querySelector&#40;'#app'&#41;.addEventListener&#40;'click', starts&#41;)

[//]: # (    )
[//]: # (    function starts&#40;&#41; {)

[//]: # (        const svg = document.querySelector&#40;'svg'&#41;;)

[//]: # (        convertSvgToPng&#40;svg, 2000, 2000, function &#40;png&#41; {)

[//]: # (            const img = document.createElement&#40;'img'&#41;;)

[//]: # (            // 缩小)

[//]: # (            img.src = png;)

[//]: # (            img.style.width = '100px')

[//]: # (            img.style.height = '100px')

[//]: # (            document.body.appendChild&#40;img&#41;;)

[//]: # (        }&#41;;)

[//]: # (    })

[//]: # (```)
