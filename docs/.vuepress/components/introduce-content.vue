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
import logoImage from '../../.vuepress/public/assets/h5logo.png'
import wxLogoImage from '../../.vuepress/public/assets/wx-logo.jpg'
export default {
  data() {
    return {
      itemList: [
          {text:'H5',image: logoImage },
          {text:'微信小程序',image:wxLogoImage },
          {text:'微信小程序',image:wxLogoImage }
          ]
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.content{
  width: 100%;
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
