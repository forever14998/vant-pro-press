<template>
  <div >
   <div class="content">
     <div class="content-item" v-for="(item,index) in itemList" :key="index">
     <img :src="item.image" class="content-item-image" />
      <div class="content-item-text">{{item.text}}</div>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
          {text:'H5',image:'https://www.hualigs.cn/image/60e45639d3b21.jpg' },
          {text:'微信小程序',image:'https://www.uviewui.com/common/weixin_mini_qrcode.png' },
          {text:'微信小程序',image:'https://www.hualigs.cn/image/60e45639d3b21.jpg' }
          ]
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.content{
  width: 80%;
  margin: 3rem 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.content-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1f5ec;
  padding: 1.5rem 1rem;
}
.content-item-image{
  width: 15rem;
}
.content-item-text{
  font-size: 1.1rem;
}

</style>
