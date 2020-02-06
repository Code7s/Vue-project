<template>
  <div class="buy-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :bannerList="bannerList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            售价：
            <span class="new-price">￥{{info.sell_price}}</span>&nbsp;&nbsp;
            <del>￥{{info.market_price}}</del>
          </p>
          <p>
            购买数量：
            <numbox @countChange="getNumboxCount" :max="info.stock_quantity"></numbox>
            <!-- 将库存两作为最大值传给子组件 -->
          </p>
          <mt-button type="danger" size="small">立即购买</mt-button>
          <mt-button type="primary" size="small" @click="ballFlag=!ballFlag">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{info.goods_no}}</p>
          <p>库存信息：{{info.stock_quantity}}</p>
          <p>上架时间：{{info.add_time|MDHms}}</p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">详情介绍</div>
      <buyintorduce></buyintorduce>
    </div>
    <div class="mui-card m-comment">
      <buycomment :id="id"></buycomment>
    </div>
    <transition @before-enter="beforEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball">0</div>
    </transition>
  </div>
</template>

<script>
import swiper from "../subcomponent/swiper.vue";
import numbox from "../subcomponent/buy_numbox.vue";
import buyintorduce from "../buy/BuyIntroduce.vue";
import buycomment from "../subcomponent/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      bannerList: [],
      info: [],
      ballFlag: false,
      count: 1 //保存选择器的值
    };
  },
  created() {
    this.getBanner();
    this.getInfo();
  },
  methods: {
    getBanner() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        }
      });
    },
    getInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        }
      });
    },
    beforEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      // 获取小球初始位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取小球结束位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.offsetWidth;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getNumboxCount(data) {
      this.count = data;
      //console.log(this.count);
    }
  },
  components: {
    swiper,
    numbox,
    buyintorduce,
    buycomment
  }
};
</script>

<style lang="scss" scoped>
.buy-container {
  background-color: #eee;
  overflow: hidden;
  padding-bottom: 50px;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .new-price {
    color: red;
    font-size: 20px;
  }
  .m-comment {
    padding: 0 5px;
  }
  // 给小球添加样式
  .ball {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: red;
    font-size: 10px;
    line-height: 19px;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 150px;
    top: 410px;
    z-index: 99;
  }
}
</style>