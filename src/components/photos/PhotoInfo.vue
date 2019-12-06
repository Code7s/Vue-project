<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="subimg">
      <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '5px'}"
        :previewBoxStyle="{}"
        :tapToClose="true"
      />
    </div>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponent/comment.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {},
      list: []
    };
  },
  created() {
    this.getNewsInfo();
    this.getThumbnail();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取详情失败！");
        }
      });
    },
    getThumbnail() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          // console.log(result.body.message);
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        } else {
          Toast("缩略图获取失败！");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: #333;
  }
  .subtitle {
    font-size: 13px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
  .subimg {
    button {
      // 隐藏缩略图放大后的左右切换按钮
      display: none;
    }
    .pswp__img {
      width: 100% !important;
      height: auto !important;
    }
    .pswp__container {
      top: -30px;
    }
  }
  .content {
    color: #666;
    padding: 10px 5px;
    text-indent: 2em;
    img {
      width: 100%;
    }
  }
}
</style>
