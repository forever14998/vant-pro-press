<!--手机 UI 展示 -->
<template>
  <div class="demo-model">
    <div class="model-content">
      <iframe :src="'https://static-bc4ee307-93e3-4838-bfc9-3ff13da43a15.bspapp.com/#/' + page" width="375" height="1000px"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:{
    page: {
      type: String,
      default: ''
    },
  },
  methods: {
  }
};
</script>

<style scoped>
.model-content{

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 30px;
}
@media screen and (min-width: 1366px) {
  .demo-model {
    height: 700px;
    font-size: 32px;
    background-color: #fff;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 160px;
    right: 20px;

    box-sizing: border-box;
    overflow-y: auto;
    background-image: url(https://www.uviewui.com/common/iPhoneX_model.png);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 30px;
    padding: 48px 23px 38px 16px;
  }
}
iframe{
  width: 300px !important;
  border: none;
  height: 600px;
  overflow:hidden;
}
</style>