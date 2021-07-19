# Overlay 遮罩
---

遮罩层组件可以将与遮罩层相链接的图形中的图像遮盖起来。常用语弹窗，提示等场景。

### 平台差异说明

<ClientOnly>
<platform-adaptation module="overlay">
</platform-adaptation>
</ClientOnly>


### 代码演示

### 基础用法
通过 v-model 控制遮罩层是否展示。

```vue
<van-overlay v-model="show">遮罩组件</van-overlay>
```

```javascript
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
```

### 嵌入内容
通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<van-overlay v-model="selectState" :duration="selectDuration" :z-index="selectIndex" :custom-style="selectStyle" @click="overlayClick">
    <view class="overlay-content"></view>
</van-overlay>
```



<ClientOnly>
<property-list module="overlay"></property-list>
</ClientOnly>

<ClientOnly>
<mobile-devices page="pages/components/overlay/overlay"></mobile-devices>
</ClientOnly>