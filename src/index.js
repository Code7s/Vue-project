// 导入Vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入路由模块
import routerObj from './router.js'
//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)
// 导入app组件
import App from './App.vue'
// 按需导入MintUI
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// vue2.5需要导入css
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/iconfont.css'

// 创建Vue实例
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  router: routerObj,
  render: c => c(App)
})
