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
// 设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 导入app组件
import App from './App.vue'
// 按需导入MintUI
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
// vue2.5需要导入css
import 'mint-ui/lib/style.css';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
// 导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/iconfont.css'

// 导入格式化时间插件
import moment from 'moment'
// 全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD") {
  return moment(dataStr).format(pattern)
})
Vue.filter('MDHms', function (dataStr, pattern = "MM-DD \n HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 创建Vue实例
var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  router: routerObj,
  render: c => c(App)
})
