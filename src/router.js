// 导入vue-router
import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Vip from './components/tabbar/Vip.vue'
import ShopCar from './components/tabbar/ShopCar.vue'
import Search from './components/tabbar/Search.vue'
import News from './components/news/News.vue'
import NewsInfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import Commodity from './components/buy/Commodity.vue'
import CommodityInfo from './components/buy/CommodityInfo.vue'
import BuyIntorduce from './components/buy/BuyIntroduce.vue'
import BuyComment from './components/buy/BuyComment.vue'
// 路由对象
var routerObj = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/vip', component: Vip },
    { path: '/shopcar', component: ShopCar },
    { path: '/search', component: Search },
    { path: '/home/news', component: News },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/image', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/buy', component: Commodity },
    { path: '/home/commodityinfo/:id', component: CommodityInfo },
    { path: '/home/buyintorduce/:id', component: BuyIntorduce },
    { path: '/home/buycomment/:id', component: BuyComment }
  ],
  linkActiveClass: 'mui-active'// 覆盖默认路由选中类(router-link-active)
})

// 导出routerObj对象
export default routerObj