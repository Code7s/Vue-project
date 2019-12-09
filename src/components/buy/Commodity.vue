<template>
  <div class="commodity-container">
    <div class="comm-item" v-for="comm in commodityList" :key="comm.id">
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
            console.log(result.body.message);
            this.commodityList = this.commodityList.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getCommodityList();
    }
  }
};
</script>

<style lang="scss">
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