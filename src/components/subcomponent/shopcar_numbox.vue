<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input
      class="mui-numbox-input"
      type="number"
      ref="numbox"
      :value="count"
      @change="countChange"
      readonly
    />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      // 把父组件传过来的ID和修改后的数量作为参数，调用mutations中的方法
      this.$store.commit("updateShopNum", {
        id: this.shopid,
        count: this.$refs.numbox.value//这里传的必须是更新后的数量
      });
    }
  },
  //接收商品的ID及其所对应的数量
  props: ["shopid", "count"]
};
</script>