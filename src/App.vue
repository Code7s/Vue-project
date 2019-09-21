<template>
  <div id="header-container">
    <!-- header -->
    <mt-header fixed title="Code7s Vue项目">
		</mt-header>
    <h1>header区</h1>
    <br><br><br><br><br><br><br><br><br><br><br>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon iconfont icon-huiyuan"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon iconfont icon-gouwuche">
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon iconfont icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
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