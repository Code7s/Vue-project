<template>
  <div class="comment-box">
    <h3>发表评论:</h3>
    <textarea placeholder="请输入评论内容(120字)..." maxlength="120"></textarea>
    <mt-button class="mint-button mint-button--primary mint-button--large">评论</mt-button>
    <div class="comment-list">
      <div class="cmt-item" v-for="comment in commentList" :key="comment.index">
        <p class="cmt-title">
          {{comment.user_name}}
          <span>{{comment.add_time|MDHms}}</span>
        </p>
        <div class="cmt-body">{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { log } from "util";
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1
    };
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.newsid + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = result.body.message;
            console.log(this.commentList);
          } else {
            Toast("加载评论列表失败");
          }
        });
    }
  },
  props: ["newsid"],
  created() {
    this.getComments();
  }
};
</script>

<style lang="scss" scoped>
.comment-box {
  h3 {
    font-size: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  textarea {
    margin-top: 15px;
  }
  .comment-list {
    .cmt-item {
      padding: 10px 0;
      border-bottom: 1px dashed #eee;
    }
    .cmt-title {
      color: #189bff;
      span {
        color: rgb(206, 206, 206);
      }
    }
  }
}
</style>