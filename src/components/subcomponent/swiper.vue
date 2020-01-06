<template>
  <mt-swipe :auto="3000">
    <!-- 谁使用此子组件谁传递bannerList -->
    <mt-swipe-item v-for="item in bannerList" :key="item.id">
      <img :src="item.img||item.src" :class="{full: isfull}" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props:['bannerList','isfull']
  // isfull属性用来确定是否宽度百分百
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
    .full{
      width: 100%;
    }
  }
}
</style>