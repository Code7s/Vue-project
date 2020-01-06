<template>
  <ul class="mui-table-view">
    <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
      <router-link :to="'/home/newsinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" />
        <div class="mui-media-body">
          <h3>{{item.title}}</h3>
          <p class="mui-ellipsis">
            <span>发布时间：{{item.add_time | dateFormat}}</span>
            <span>点击{{item.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { log } from "util";
import{ Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNews() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
          // console.log(this.newsList);
        } else {
          Toast("加载新闻列表失败");
        }
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  padding-bottom: 50px;
  .mui-table-view-cell:after {
    left: 8px;
    right: 8px;
  }
  .mui-media-body {
    h3 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #189bff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>