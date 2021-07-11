<!--首页 快速开始 按钮-->
<template>
  <div style="text-align: center;padding-bottom: 10rem">
    <a-button  type="primary" calss size="large" @click="goToIndex()" > 立即开始 <a-icon type="right" /> </a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    goToIndex() {
      this.$router.push('/components/');
    }
  }
};
</script>

