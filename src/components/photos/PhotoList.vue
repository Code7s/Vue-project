<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >全部</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">家居生活</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">摄影设计</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">明星美女</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入mui.js
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {};
  },
  mounted() {
    //需要页面渲染完成再启动初始化scroll控件
    // mui中使用区域滚动组件，需手动初始化scroll控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style>
* {
  touch-action: pan-y;
}
</style>