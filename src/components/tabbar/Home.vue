<template>
  <div>
    <swiper :bannerList="bannerList" :isfull="true"></swiper>
    <ul id="sub-nav" class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="../../images/news.png" alt />
          <!-- <span class="mui-badge">5</span> -->
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/image">
          <img src="../../images/image.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/buy">
          <img src="../../images/buy.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/feedback">
          <img src="../../images/feedback.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/video">
          <img src="../../images/video.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/about">
          <img src="../../images/contact.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponent/swiper.vue";
export default {
  data() {
    return {
      bannerList: [] //轮播
    };
  },
  methods: {
    getBanner() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  },
  components: {
    swiper
  },
  created() {
    this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
  #sub-nav {
    background: white;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 100%;
      }
      .mui-media-body {
        font-size: 14px;
      }
    }
  }
</style>