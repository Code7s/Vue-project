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
            <numbox></numbox>
          </p>
          <mt-button type="danger" size="small">立即购买</mt-button>
          <mt-button type="primary" size="small">加入购物车</mt-button>
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
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="gointroduce(id)" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" @click="gobuycomment(id)" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponent/swiper.vue";
import numbox from "../subcomponent/buy_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      bannerList: [],
      info: []
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
    gointroduce(id) {
      this.$router.push({ path: "/home/buyintorduce/" + id });
    },
    gobuycomment(id) {
      this.$router.push({ path: "/home/buycomment/" + id });
    }
  },
  components: {
    swiper,
    numbox
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
  .mui-card-footer {
    display: block;
    button {
      margin-bottom: 10px;
    }
  }
}
</style>