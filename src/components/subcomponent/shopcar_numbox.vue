<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" ref="numbox" value="1" @change="countChange" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted(){
    mui('.mui-numbox').numbox()
  },
  methods:{
    countChange(){//当数字改变时把值传给父组件
      this.$emit("countChange",this.$refs.numbox.value)
    }
  }
  // },
  // props:['max'],//接收父组件传过来当最大值
  // watch:{//监听max值的变化，动态设置最大值为库存两
  //   "max": function (newV,oldV) { 
  //     mui('.mui-numbox').numbox().setOption('max',newV)
  //    }
  // }
};
</script>