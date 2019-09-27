// 导入vue-router
import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Vip from './components/tabbar/Vip.vue'
import ShopCar from './components/tabbar/ShopCar.vue'
import Search from './components/tabbar/Search.vue'
import News from './components/news/News.vue'
// 路由对象
var routerObj = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component: Home},
    {path:'/vip',component: Vip},
    {path:'/shopcar',component: ShopCar},
    {path:'/search',component: Search},
    {path:'/home/news',component: News}
  ],
  linkActiveClass: 'mui-active'// 覆盖默认路由选中类(router-link-active)
})

// 导出routerObj对象
export default routerObj