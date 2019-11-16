<template>
  <div class="comment-box">
    <h3>发表评论:</h3>
    <textarea placeholder="请输入评论内容(120字)..." maxlength="120" v-model="msg"></textarea>
    <mt-button class="mint-button mint-button--primary mint-button--large" @click="postComment">评论</mt-button>
    <div class="comment-list">
      <div class="cmt-item" v-for="comment in commentList" :key="comment.index">
        <p class="cmt-title">
          {{comment.user_name}}
          <span>{{comment.add_time|MDHms}}</span>
        </p>
        <div class="cmt-body">{{comment.content}}</div>
      </div>
    </div>
    <mt-button class="mint-button mint-button--danger mint-button--large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { log } from "util";
export default {
  data() {
    return {
      commentList: [],
      msg: "",
      pageIndex: 1
    };
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.newsid + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = this.commentList.concat(result.body.message);
            console.log(this.commentList);
          } else {
            Toast("加载评论列表失败");
          }
        });
    },
    postComment() {
      //判断评论内容是否为空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http
        .post("api/postcomment/" + this.newsid, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            //手动添加一个评论对象
            var cmt = {
              user_name: "code7s",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.commentList.unshift(cmt);
            this.msg = "";
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
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
  .mint-button {
    margin-bottom: 15px;
  }
}
</style>