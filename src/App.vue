<template>
  <div id="header-container">
    <!-- header -->
    <mt-header fixed title="Code7s Vue项目">
		</mt-header>
    <router-view></router-view>
    <br><br><br><br><br><br><br><br><br><br><br>
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
					<span class="mui-badge">9</span>
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
export default {

}
</script>

<style scoped>
#header-container{
  padding-top:40px;
}
</style>