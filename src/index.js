// 导入Vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入路由模块
import routerObj from './router.js'
// 导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)
// vuex
import Vuex from "vuex"
Vue.use(Vuex)

//购物车状态管理
// 获取本地存储的购物车数据保存到state中
var car=JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state: {
    //储存购物车数据
    car
    // 以这种形式传入car：{id:xx, num:xx, price:xx,option:true}
  },
  mutations: {
    addToCar(state, carData) {//点击加入购物车把商品信息储存都car上
      // 默认初始在购物车中没有找到相同的商品
      var flag = false;
      state.car.some(item => {
        if (item.id === carData.id) {
          // 判断加入购物车的商品是否存在，如果存在则改变数量，不存在则添加到购物车中
          item.num += carData.num
          flag = true;
          return true;
        }
      })
      if (!flag) {// 走完some依然返回false时，表示商品不存在购物车 
        state.car.push(carData)
      }
      // 使用本地存储保存购物车数据
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {
    getAllNum:function(state){//计算总数量
      var allNum=0
      state.car.forEach(item => {
        // console.log(item.num,item.price);
        allNum+=item.num
      });
      return allNum;
    },
    getAllPrice:function(state){//计算总价钱
      var allPrice=0;
      state.car.forEach(item=>{
        allPrice+=item.num*item.price
      })
      return allPrice
    }
  }
})

// 设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 设置post提交表单数据格式（application/x-www—form—urlencoded）
Vue.http.options.emulateJSON = true
// 导入app组件
import App from './App.vue'

/* MintUI */
// 按需导入MintUI
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// vue2.5需要导入css
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 导入缩略图包
import VuePreview from 'vue2-preview';
Vue.use(VuePreview);

/* MUI */
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
  render: c => c(App),
  store
})
