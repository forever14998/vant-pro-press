# Popup 弹出层
---

弹出层用户展示提示信息，对话框，用户输入等场景。常与遮罩层联用。

### 平台差异说明
<ClientOnly>
<platform-adaptation module="popup">
</platform-adaptation>
</ClientOnly>

### 代码演示

### 基础用法
通过 v-model 控制弹出层是否展示。

```vue
<van-popup v-model="show">弹窗组件</van-popup>
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

### 弹出位置
通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。

```vue
<van-popup v-model="show" position="top" />
```

### 圆角弹窗
通过 round 属性 设置内容是否显示圆角。

```vue
<van-popup v-model="show" :round="true" />
```



设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。


<ClientOnly>
<property-list module="popup"></property-list>
</ClientOnly>



<ClientOnly>
<mobile-devices page="pages/components/popup/popup"></mobile-devices>
</ClientOnly>