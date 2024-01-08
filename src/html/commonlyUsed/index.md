## \<div>
最常见的元素，用于将块级元素分组。

<a-card hoverable>
    <a-space :size="20" class="content">
        <a-tooltip title="正方形">
            <div class="item square"></div>
        </a-tooltip>
        <a-tooltip title="圆形">
            <div class="item round"></div>
        </a-tooltip>
        <a-tooltip title="三角形">
            <svg width="100" height="100">
                <polygon points="50,0 100,100 0,100" fill="url(#grad1)" />
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color: #FF3CAC;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#784BA0;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2B86C5;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
        </a-tooltip>
    </a-space>
</a-card>

<style lang="less">
.content {
    .item {
        width: 100px;
        height: 100px;
        background-image:var(--hy--bg-color);
    }
}
.square {
    aspect-ratio: 1;
    }
.round {
    border-radius: 50px;
    }
.triangle {
    width: 0!important;
    height: 0!important;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
.reset {
    h1, h2, h3, h4, h5, h6 {
        all: revert!important;
    }
}
</style>

::: tip 
  * 三角形 使用 css-border属性实现,但是无法实现渐变色,在这里使用svg代替 
  * 文中组件使用 **antd-vue**中的tooltip组件
:::

```html
<a-space :size="20" class="content">
  <a-tooltip title="正方形">
    <div class="item square"></div>
  </a-tooltip>
  <a-tooltip title="圆形">
    <div class="item round"></div>
  </a-tooltip>
  <a-tooltip title="三角形">
    
<!--    <div class="item triangle"></div>-->
    <svg width="100" height="100">
      <polygon points="50,0 100,100 0,100" fill="url(#grad1)" />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #FF3CAC;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#784BA0;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2B86C5;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>

  </a-tooltip>
</a-space>


<style lang="less">
  .content {
    .item {
      width: 100px;
      height: 100px;
      background-image:var(--hy--bg-color);
    }
  }
  .square {
    aspect-ratio: 1;
  }
  .round {
    border-radius: 50px;
  }
  .triangle {
    width: 0!important;
    height: 0!important;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
  }
</style>
```

## \<h1> ~ \<h6>
标题元素，用于定义标题，h1~h6分别表示6个级别的标题，h1是最高级别的标题，h6是最低级别的标题。

<a-card hoverable>
    <div class="reset">
        <h1>H1. Huaiyou is god</h1>
        <h2>H2. Huaiyou is god</h2>
        <h3>H3. Huaiyou is god</h3>
        <h4>H4. Huaiyou is god</h4>
        <h5>H5. Huaiyou is god</h5>
        <h6>H6. Huaiyou is god</h6>
    </div>
</a-card>


