# Calendar 日历
---

日历组件用于选择日期或日期区间，模式为单选、多选、日期区间选择。需要Hx 版本 >=3.1.22

### 平台差异说明

<ClientOnly>
<platform-adaptation  module="calendar" >
</platform-adaptation>
</ClientOnly>

### 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 confirm 事件。

```vue

<template>
  <view>
    <button @click="calendarShow = true">选择单个日期</button>
    <view>{{selectedDate}}</view>
    <van-calendar v-model="calendarShow" @confirm="onConfirm" type="single"/>
  </view>
</template>
```

```js
export default {
    data() {
        return {
            calendarShow: false,
            selectedDate: ''
        };
    },
    methods: {
        /**
         * 选择日期回调
         * @param {Object} result
         */
        onConfirm(result) {
            // 解析结果
            this.selectedDate = result.map(el => this.$u.cUtil.dateFormate(el, 'yyyy-MM-dd'));
            // 关闭组件
            this.calendarShow = false;
        },
        navUnit(url) {
            uni.navigateTo({
                url
            });
        }
    }
};
```

​

### 选择多个日期

设置 type 为 multiple 后可以选择多个日期，此时 confirm 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```vue

<template>
  <view>
    <button @click="calendarShow = true">选择多个日期</button>
    <view>{{selectedDate}}</view>
    <van-calendar v-model="calendarShow" @confirm="onConfirm" type="multiple"/>
  </view>
</template>
```

```js
export default {
    data() {
        return {
            calendarShow: false,
            selectedDate: ''
        };
    },
    onLoad() {
    },
    methods: {
        /**
         * 选择日期回调
         * @param {Object} result
         */
        onConfirm(result) {
            // 解析结果
            this.selectedDate = result.map(el => this.$u.cUtil.dateFormate(el, 'yyyy-MM-dd'));
            // 关闭组件
            this.calendarShow = false;
        }
    }
};
```   

​

### 选择日期区间

设置 type 为 range 后可以选择日期区间，此时 confirm 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```vue

<template>
  <view>
    <button @click="calendarShow = true">选择日期区间</button>
    <view>{{selectedDate}}</view>
    <van-calendar v-model="calendarShow" @confirm="onConfirm" type="range"/>
  </view>
</template>
```

```js
export default {
    data() {
        return {
            calendarShow: false,
            selectedDate: ''
        };
    },
    onLoad() {
    },
    methods: {
        /**
         * 选择日期回调
         * @param {Object} result
         */
        onConfirm(result) {
            // 解析结果
            this.selectedDate = result.map(el => this.$u.cUtil.dateFormate(el, 'yyyy-MM-dd'));
            // 关闭组件
            this.calendarShow = false;
        }
    }
};
```

<ClientOnly>
<alert-content message="Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allow-same-day 属性来允许选择同一天。"></alert-content>
</ClientOnly>

​

### 如何关闭

1. 选中日期后触发 @onConfirm 回调
2. 组件右上角关闭 icon 触发 @close 回调
3. 点击组件其余遮罩位置 触发 @close 回调

```vue

<van-calendar v-model="calendarShow" @confirm="onConfirm" @close="close"/>
```

```js
export default {
    data() {
        return {
            calendarShow: false,
            selectedDate: ''
        };
    },
    onLoad() {
    },
    methods: {
        /**
         * 选择日期回调
         * @param {Object} result
         */
        onConfirm(result) {
            // 关闭组件
            this.calendarShow = false;
        },
        /**
         * 关闭
         */
        close() {
            // 关闭组件
            this.calendarShow = false;
        }
    }
};
```

​

### 快捷选择

将 show-confirm 设置为 false 可以隐藏确认按钮，这种情况下选择完成后会立即触发 confirm 事件。(日期为multiple时不支持)

```vue

<van-calendar v-model="true" @confirm="onConfirm" :show-confirm="false"/>
```

​

### 自定义颜色

通过 color 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```vue

<van-calendar v-model="true" @confirm="onConfirm" color="red"/>
```

​

### 自定义日期范围

通过 defaultDate 设置默认选择的日期 通过 min-date 和 max-date 定义日历的范围。

```vue

<van-calendar v-model="true" @confirm="onConfirm" :minDate="minDate" :defaultDate="defaultDate"/>
```

```js
export default {
    data() {
        return {
            minDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 30).getTime(),
            defaultDate: new Date(new Date().getFullYear(), new Date().getMonth() + 4, new Date().getDate()).getTime()
        };
    }
};
```

<ClientOnly>
<alert-content message="Tips: 如defaultDate不传递 ，默认选择最小时间。 min-date 默认当天，max-date 默认后6个月。"></alert-content>
</ClientOnly>

​

### 自定义按钮文字

通过 confirm-text 设置按钮文字，通过 confirm-disabled-text 设置按钮禁用时的文字。

```vue

<van-calendar v-model="true" @confirm="onConfirm" button-text="选中日期"/>
```

​

### 日期区间最大范围

选择日期区间时，可以通过 max-range 属性来指定最多可选天数，选择的范围超过最多可选天数时，设置 show-range-prompt 属性状态 会弹出相应的提示文案。

```vue

<van-calendar v-model="true" @confirm="onConfirm" type="range" max-range="10" :show-range-prompt="true"/>
```

​

### 自定义周起始日

通过 first-day-of-week 属性设置一周从哪天开始。默认周天。

```vue

<van-calendar v-model="true" @confirm="onConfirm" :first-day-of-week="1"/>
```

​

### 自定义日期文案

通过传入 formatter 函数来对日历上每一格的内容进行格式化。

```vue

<van-calendar v-model="true" @confirm="onConfirm" :formatter="formatter"/>
```

```js
export default {
    ...
        methods
:
{
    formatter(day)
    {
        const month = day.date.getMonth() + 1;
        const date = day.date.getDate();

        if (month === 5) {
            if (date === 1) {
                day.topInfo = '劳动节';
            } else if (date === 4) {
                day.topInfo = '青年节';
            } else if (date === 11) {
                day.text = '今天';
            }
        }

        if (day.type === 'start') {
            day.bottomInfo = '入住';
        } else if (day.type === 'end') {
            day.bottomInfo = '离店';
        }

        return day;
    }
}
}
;
```

[comment]: <> (<ClientOnly>)

[comment]: <> (<table-content page="pages/components/calendar/calendar"></table-content>)

[comment]: <> (</ClientOnly>)


<ClientOnly>
<property-list module="calendar"></property-list>
</ClientOnly>


<ClientOnly>
<mobile-devices page="pages/components/calendar/calendar"></mobile-devices>
</ClientOnly>