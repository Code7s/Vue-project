<template>
  <mt-swipe :auto="3000">
    <!-- 谁使用此子组件谁传递bannerList -->
    <mt-swipe-item v-for="item in bannerList" :key="item.id">
      <img :src="item.img" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props:['bannerList']
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>