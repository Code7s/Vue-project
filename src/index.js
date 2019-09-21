// 导入Vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入app组件
import App from './App.vue'
// 导入路由模块
import routerObj from './router.js'
// 按需导入MintUI
import { Header } from 'mint-ui';
// vue2.5需要导入css
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
// 导入MUI
import './lib/mui/css/mui.min.css'

// 创建Vue实例
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(App)
})
