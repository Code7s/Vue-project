<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" value="1" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted(){
    mui('.mui-numbox').numbox()
  }
};
</script>