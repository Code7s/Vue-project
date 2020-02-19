<template>
  <div class="container">
    <!-- header -->
    <mt-header id="header" fixed title="Code7s Vue项目"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon iconfont icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon iconfont icon-gouwuche">
          <span id="badge" class="mui-badge">{{$store.getters.getAllNum}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
        <span class="mui-icon iconfont icon-sousuo"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header{
  z-index: 10000;
}
.container {
  padding-top: 40px;
  overflow-x: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate(100%);
}
.v-leave-to {
  transform: translate(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>