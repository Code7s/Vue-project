<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import{ Toast } from 'mint-ui'
export default {
  data() {
    return {
      bannerList: [] //轮播
    };
  },
  methods: {
    getBanner() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.body.status===0) {
            this.bannerList=result.body.message
          }else{
            Toast('加载轮播图失败')
          }
        });
    }
  },
  created() {
    this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    img{
      width: 100%;
      height: 100%;
    }  
  }
}
</style>