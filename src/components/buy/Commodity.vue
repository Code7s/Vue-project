<template>
  <div class="commodity-container">
    <!-- 在class为comm-item的div上添加点击事件 -->
    <div class="comm-item" v-for="comm in commodityList" :key="comm.id" @click="goDetail(comm.id)">
    <!-- 这里除了用router-link实现跳转之外还可以使用$router.push()的方式实现 -->
      <img :src="comm.img_url" :alt="comm.zhaiyao" />
      <h3 class="comm-title">{{comm.title}}</h3>
      <div class="price">
        <p>
          <span class="new-price">￥{{comm.sell_price}}</span>
          <span class="old-price">￥{{comm.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{comm.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button class="mint-button mint-button--danger mint-button--large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      commodityList: []
    };
  },
  created() {
    this.getCommodityList(this.id);
  },
  methods: {
    getCommodityList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status == 0) {
            // console.log(result.body.message);
            this.commodityList = this.commodityList.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getCommodityList();
    },
    goDetail(id){
      // 注意区分:
      // $router :  路由导航对象，用来实现路由前进后退跳转
      // $route : 路由参数对象，用来传递路由参数
      this.$router.push({path: '/home/commodityinfo/'+id})
    }
  }
};
</script>

<style lang="scss" scoped>
.commodity-container {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0 5px 50px;
  .comm-item {
    width: 49%;
    margin-bottom: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      height: 180px;
      min-height: 80px;
    }
    .comm-title {
      font-size: 16px;
    }
    .price {
      font-size: 14px;
      background-color: #eee;
      padding: 5px;
      padding-bottom: 0px;
      .old-price {
        text-decoration: line-through;
      }
      .new-price {
        color: #f00;
        font-size: 18px;
        padding-right: 10px;
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .mint-button {
    margin: 10px;
  }
}
</style>