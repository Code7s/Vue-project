<template>
  <div class="introduce-container">
    <h3 class="title">{{introduce.title}}</h3>
    <hr />
    <div class="content" v-html="introduce.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduce: []
    };
  },
  created() {
    this.getIntroduce();
  },
  methods: {
    getIntroduce() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.introduce = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="scss">
.introduce-container {
  padding: 0 4px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: #333;
  }
  .content {
    p {
      margin: 0;
      img {
        width: 100%;
        display: block;
      }
    }
    table {
      width: 100%;
      td {
        img {
          width: 100%;
          display: block;
        }
        img[width="165"]{
          // 解决佳能单反套机和联想15.6电脑图文详情中图片显示宽度样式冲突
          width: 165px;
        }
      }
    }
  }
}
</style>