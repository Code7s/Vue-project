<template>
  <div class="buy-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="picture in bannerList" :key="picture.index">
              <img :src="picture.src" alt />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      bannerList: []
    };
  },
  createdmo() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.bannerList = result.body.message;
          console.log(result.body);
        } else {
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.buy-container {
  background-color: #eee;
  overflow: hidden;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>>