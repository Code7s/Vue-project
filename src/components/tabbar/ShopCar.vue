<template>
  <div class="shop-car">
    <div class="mui-card" v-for="(item,index) in cardata" :key="item.id">
      <div class="shopcar-list">
        <input type="checkbox" checked="checked" />
        <img :src="item.thumb_path" alt />
        <div class="info">
          <h3>{{item.title}}</h3>
          <p>
            <span>¥{{item.sell_price}}</span>
            <!-- 循环哪项就取哪项的数量 这里的$store.getters.getShopCount[item.id]是对应ID的数量值，shopid="item.id"则是商品的ID值 -->
            <shopcarnum :count="$store.getters.getShopCount[item.id]" :shopid="item.id"></shopcarnum>
            <a href="#" @click.prevent="remove(item.id,index)">删除</a>
          </p>
        </div>
      </div>
    </div>
    <div class="shop-total mui-card">总价：{{$store.getters.getAllPrice}}</div>
  </div>
</template>
<script>
import shopcarnum from "../subcomponent/shopcar_numbox.vue";
export default {
  data() {
    return {
      cardata: {}
    };
  },
  methods: {
    getShopData() {
      // 获取到购物车所有商品id添加到数组中
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      } else {
        this.$http
          .get("api/goods/getshopcarlist/" + idArr.join(","))
          .then(result => {
            if (result.body.status == 0) {
              this.cardata = result.body.message;
            }
          });
      }
    },
    remove(id,index){ //删除购物车商品
      this.cardata.splice(index,1);
      this.$store.commit('removeShop',id)
    }
  },
  created() {
    this.getShopData();
  },
  components: { shopcarnum }
};
</script>

<style lang="scss" scoped>
.shop-car {
  background-color: #eee;
  overflow: auto;
  .shopcar-list {
    padding: 5px;
    display: flex;
    align-items: center;
    input {
      width: 18px;
      height: 18px;
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 5px;
    }
    .info {
      h3 {
        font-size: 16px;
        max-width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        margin: 0;
        span {
          color: red;
          font-size: 20px;
        }
        a {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>