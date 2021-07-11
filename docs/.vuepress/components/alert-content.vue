<!--首页 快速开始 按钮-->
<template>
  <div>
    <a-alert :message="message" :type="type" :description="description" show-icon />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

