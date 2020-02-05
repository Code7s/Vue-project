# Vue项目

> 这是一个使用vue+webpack搭建的移动端网站

## 技术栈

1. Vue
2. webpack
3. [Mint-UI](http://mint-ui.github.io/docs/#/zh-cn2/)
4. [MUI](https://dev.dcloud.net.cn/mui/)


## 开始项目

安装Mint-UI: `npm install mint-ui -S`

目录结构:

```js
├──dist
├──node_modules
├──src
│   ├──lib
│   ├──images
│   ├──index.html
│   ├──App.vue
│   ├──index.js
│   ├──router.js
├──.gitignore
├──README.md
├──package.json
├──webpack.config.js
```

记得使用 `.gitignore` 屏蔽掉node_modules文件夹

webpack.json配置:

```webpack.json
{
  "name": "vue",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^7.3.1",
    "style-loader": "^1.0.0",
    "url-loader": "^2.1.0",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.1"
  },
  "dependencies": {
    "mint-ui": "^2.2.13",
    "vue": "^2.6.10",
    "vue-resource": "^1.5.1",
    "vue-router": "^3.1.3"
  }
}
```

webpack.config.js配置:

``` js
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|png|gif|jpeg|bmp|svg)$/, use: ['url-loader?limit=7000&name=[hash:10]-[name].[ext]'] },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.vue$/, use: ['vue-loader'] }
    ]
  }
}
```

运行 `cnpm i` 后在index.js中导入Vue,如果存在包之间版本不对应请看 [webpack学习总结](https://www.code7s.com/webpack学习总结/)

``` js
// 导入Vue
import Vue from 'vue'
// 导入App.vue
import App from './App.vue'
```



## 首页页面



### header

使用MintUI

在index.js中导入组件:

```js
// 按需导入MintUI*
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'; //vue2.5需导入css
Vue.component(Header.name, Header);
```

导入完成就可以在App.vue中使用了:

```vue
<template>
  <div class="container">
    <mt-header id="header" fixed title="Code7s Vue项目"></mt-header>
  </div>
</template>
```

然后给外部div添加内边距保证头部不会遮盖内容区:

``` css
.container{
  padding-top:40px;
}
```



### footer

使用 MUI

**MUI无法使用npm安装需要手动在github上下载,然后把dist文件夹改名为mui复制到自己的项目`src/lib`中**

解压后的MUI在examples文件夹中复制想要的模板到自己项目中

在index.js中导入

```js	
import './lib/mui/css/mui.min.css';
//如果使用阿里icon图标则需要导入添加进来的css路径
import './lib/mui/css/iconfont.css';
```

#### 如何使用阿里图标库

[阿里图标库官网](https://www.iconfont.cn/)

1. 搜索图标添加到购物车

2. 储存为项目

3. 下载字体到本地

4. 修改css

   下载下来的默认的css代码如下：

   ```css
   @font-face {font-family: "iconfont";
     src: url('../fonts/iconfont.ttf?t=1569102227443') format('truetype')
   }
   .iconfont {  
     font-family:"iconfont" !important;  
     font-size:16px;  
     font-style:normal;  
     -webkit-font-smoothing: antialiased;  
     -webkit-text-stroke-width: 0.2px;  
   } 
   .icon-shopcart:before {
     content: "\e60b";
   }
   ```

   我们作如下修改：

   - 为保证和mui目录结构统一，建议将字体文件放在fonts目录下，这样我们需要修改@font-face下得url属性；
   - 只兼容iOS和Android版本的话，我们仅需要ttf格式的字体即可，其它字体可以删除；同时，我们也仅需保留-webkit前缀语法，-moz前缀部分可以删除；

   修改后的css代码如下：

   ```css
   @font-face {font-family: "iconfont";
     src: url('../fonts/iconfont.ttf') format('truetype')
   }
   .iconfont {  
     font-family:"iconfont" !important;  
     font-size:16px;  
     font-style:normal;  
     -webkit-font-smoothing: antialiased;  
     -webkit-text-stroke-width: 0.2px;  
   }
   .icon-shopcart:before {
     content: "\e60b";
   }
   ```

   

5. 将iconfont.css及iconfont.ttf两个文件分别拷贝到mui目录下的css及fonts目录下，然后即可在mui中引用刚生成的字体图标,方式如下:

   `<span class="mui-icon iconfont icon-shopcart">`

### tabbar

使用 MUI

将4个底部选项a链接改成 `router-link` ,修改后如下:

``` html
<nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon iconfont icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon iconfont icon-gouwuche">
            <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
        <span class="mui-icon iconfont icon-sousuo"></span>
        <span class="mui-tab-label">搜索</span>
    </router-link>
</nav>
```

创建tabbar路由组件:

在 src目录下创建 `components/tabbar` 文件夹,在tabbar文件夹中新建四个组件:

- Home.vue
- Vip.vue
- ShopCar.vue
- Search.vue

在index.js中配置路由:

```js
// 导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 导入路由模块
import routerObj from './router.js'
// 在vue实例上添加
router: routerObj
```

配置路由模块(router.js):

``` js
// 导入vue-router
import VueRouter from 'vue-router'
// 路由对象
var routerObj = new VueRouter({
  routes:[
 		{path:'/',redirect:'/home'},
    {path:'/home',component: Home},
    {path:'/vip',component: Vip},
    {path:'/shopcar',component: ShopCar},
    {path:'/search',component: Search}
  ],
  linkActiveClass: 'mui-active'// 覆盖默认路由选中类(router-link-active)
})
// 导出routerObj对象
export default routerObj
```

在App.vue中的头部与尾部之间添加路由显示区:

`<router-view></router-view>`

### 底部切换过渡效果

在 App.vue中使用transaction把router-view包裹起来:

``` html	
<transition>
    <router-view></router-view>
</transition>
```

添加过渡样式:

```css
.container {
  padding-top: 40px;
  overflow-x: hidden;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate(100%);
}
.v-leave-to {
  transform: translate(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
```



### swipe

在index.js中导入MintUI时添加 `Swipe, SwipeItem`两项

``` js
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//由于需要ajax获取属性,需导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource)
// 设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
```



在`src/components/subcomponent/`下创建swiper组件，并在Home.vue中引入：

``` html
<template>
  <div>
    <swiper :bannerList="bannerList" :isfull="true"></swiper>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponent/swiper.vue";
export default {
  data() {
    return {
      bannerList: [] //轮播
    };
  },
  methods: {
    getBanner() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  },
  components: {
    swiper
  },
  created() {
    this.getBanner();
  }
};
</script>
```



编辑swiper.vue:

``` html
<template>
  <mt-swipe :auto="3000">
    <!-- 谁使用此子组件谁传递bannerList -->
    <mt-swipe-item v-for="item in bannerList" :key="item.id">
      <img :src="item.img" :class="{full:isfull}" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props:['bannerList','isfull']
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
    .full{
      width:100%;
    }
  }
}
</style>
```



###六宫格

在Home.vue中添加(依赖于MUI):

``` html
<ul id="sub-nav" class="mui-table-view mui-grid-view mui-grid-9">
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/news.png" alt />
      <!-- <span class="mui-badge">5</span> -->
      <div class="mui-media-body">新闻资讯</div>
    </a>
  </li>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/image.png" alt />
      <div class="mui-media-body">图片分享</div>
    </a>
  </li>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/buy.png" alt />
      <div class="mui-media-body">商品购买</div>
    </a>
  </li>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/feedback.png" alt />
      <div class="mui-media-body">留言反馈</div>
    </a>
  </li>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/video.png" alt />
      <div class="mui-media-body">视频专区</div>
    </a>
  </li>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <a href="#">
      <img src="../../images/contact.png" alt />
      <div class="mui-media-body">联系我们</div>
    </a>
  </li>
</ul>
```

可以自行找相应的图片存放在`src/images`下

style添加:

``` css
#sub-nav {
  background: white;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 100%;
    }
    .mui-media-body{
      font-size: 14px;
    }
  }
}
```



## 新闻咨询页

### 新闻列表页

在src/components/news下创建新闻页组件 News.vue

然后把Home.vue中九宫格的点击改为路由连接：

``` html
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
  <router-link to="/home/news">
    <img src="../../images/news.png" alt />
    <div class="mui-media-body">新闻资讯</div>
  </router-link>
</li>
```

在router.js中配置:

``` js
import News from './components/news/News.vue'
// 在路由匹配规则添加以下项:
{path:'/home/news',component: News}
```

编辑News.vue(引用MUI):

```html
<template>
  <ul class="mui-table-view">
    <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
      <a href="javascript:;">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" />
        <div class="mui-media-body">
          <h3>{{item.title}}</h3>
          <p class="mui-ellipsis">
            <span>发布时间：{{item.add_time | dateFormat}}</span>
            <span>点击{{item.click}}次</span>
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>
```

样式:

``` css
<style lang="scss" scoped>
.mui-table-view {
  padding-bottom: 50px;
  .mui-media-body {
    h3 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #189bff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
```

因为获取到的时间需要格式化,使用插件moment,安装方式:

`cnpm i moment -S`

在index.js中导入moment,并创建全局过滤器:

``` js
// 导入格式化时间插件
import moment from 'moment'
// 全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD") {
  return moment(dataStr).format(pattern)
})
```

在News.vue中编辑js:

```js
import{ Toast } from 'mint-ui'
export default {
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNews() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newsList = result.body.message;
          //console.log(this.newsList);
        } else {
          Toast("加载新闻咨询失败");
        }
      });
    }
  },
  created() {
    this.getNews();
  }
};
```

### 新闻详情页

在News.vue中把新闻列表的a链接改为router-link:

``` html
<router-link :to="'/home/newsinfo/'+item.id">
```

配置路由模块:

``` js
import NewsInfo from './components/news/Newsinfo.vue'
// 在路由匹配规则添加以下项:
{path:'/home/newsinfo/:id',component: NewsInfo}
```

编辑Newsinfo.vue:

``` html
<template>
  <div class="newsinfo">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="sub-title">
      <span>发布时间:{{newsInfo.add_time|dateFormat}}</span>
      <span>点击{{newsInfo.click}}次</span>
    </p>
    <div class="content" v-html="newsInfo.content"></div>
  </div>
</template>
```

css:

``` css
<style lang="scss" scoped>
.newsinfo {
  padding: 0 5px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
  }
  .sub-title {
    font-size: 12px;
    color: #189bff;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    border-bottom: 1px solid #eee;
  }
  .content{
    padding: 15px 0;
  }
}
</style>
```

js:

``` js
import{ Toast } from 'mint-ui'
export default {
  data() {
    return {
      // 将url传过来的id挂载到data上方便调用
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/"+this.id).then(result => {
        if (result.body.status === 0) {
          this.newsInfo=result.body.message[0]
        } else {
          Toast("加载新闻详情失败");
        }
      });
    }
  },
  created(){
    this.getNewsInfo()
  }
};
```

### 评论子组件

在src/components/subcpmponent下新建comment.vue

然后在Newsinfo.vue中导入这个组件:

``` js
import comment from "../subcomponent/comment.vue";
```

在实例上创建私有组件:

``` js
 components: {
    // 评论子组件
    "comment-box": comment
 },
```

挂载到template上:

``` html
<comment-box></comment-box>
```

在index.js上导入mintUI的按钮并创建一个时间过滤器:

``` js
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';//Button是添加的
Vue.component(Button.name, Button);
// 过滤时间为: 月-日 时:分:秒
Vue.filter('MDHms', function (dataStr, pattern = "MM-DD \n HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 由于评论需要提交post请求，全局配置post提交表单数据格式（application/x-www—form—urlencoded）
Vue.http.options.emulateJSON=true
```

把Newsinfo.vue中的id值传给子组件:

``` html
在Newsinfo中的评论组件添加:newsid="this.id"
<comment-box :newsid="this.id"></comment-box>
```

编辑comment.vue:

tempalate:

``` html
<div class="comment-box">
  <h3>发表评论:</h3>
  <textarea placeholder="请输入评论内容(120字)..." maxlength="120" v-model="msg"></textarea>
  <mt-button class="mint-button mint-button--primary mint-button--large" @click="postComment">评论</mt-button>
  <div class="comment-list">
    <div class="cmt-item" v-for="comment in commentList" :key="comment.index">
      <p class="cmt-title">
        {{comment.user_name}}
        <span>{{comment.add_time|MDHms}}</span>
      </p>
      <div class="cmt-body">{{comment.content}}</div>
    </div>
  </div>
  <mt-button class="mint-button mint-button--danger mint-button--large" @click="getMore">加载更多</mt-button>
</div>
```

style:

``` css
<style lang="scss" scoped>
.comment-box {
  h3 {
    color: black;
    font-size: 17px;
    font-weight: normal;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  textarea {
    margin-top: 15px;
  }
  .comment-list {
    .cmt-item {
      padding: 10px 0;
      border-bottom: 1px dashed #eee;
    }
    .cmt-title {
      color: #189bff;
      span {
        color: rgb(206, 206, 206);
      }
    }
  }
  .mint-button{
    margin-bottom: 15px;
  }
}
</style>
```

js:

``` js
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      commentList: [],
      mag: '',
      pageIndex: 1,
      id: this.$route.params.id
    };
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = this.commentList.concat(result.body.message);
            console.log(this.commentList);
          } else {
            Toast("加载评论列表失败");
          }
        });
    },
    postComment() {
      //判断评论内容是否为空
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http
        .post("api/postcomment/" + this.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            //手动添加一个评论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.commentList.unshift(cmt);
            this.msg = "";
          }
        });
    },
    getMore(){
      this.pageIndex++;
      this.getComments();
    }
  },
  props: ["newsid"],
  created() {
    this.getComments();
  }
};
</script>
```



## 图片分享页



### 图片列表

在`src/components/photos`下创建` PhotoList.vue` 文件，然后配置路由：

``` js
import PhotoList from './components/photos/PhotoList.vue'
// 在路由对象上添加以下配置：
{ path: '/home/image', component: PhotoList }
```

编辑 PhotoList.vue:

template:

```html
<template>
  <div>
    <!-- 引用MUI中的tab-webview-main.html -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',category.id==0?'mui-active':'']"
            v-for="category in allcate"
            :key="category.id"
            @click="getImgList(category.id)"
          >{{category.title}}</a>
        </div>
      </div>
    </div>
    <!-- 引用MintUI中的Lazy load -->
    <ul class="imglist">
      <li v-for="imgs in imgList" :key="imgs.id">
        <img v-lazy="imgs.img_url" />
        <div class="img-title">
          <h4>{{imgs.title}}</h4>
          <p>{{imgs.zhaiyao}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
```

js:

``` js
<script>
//导入mui.js
import mui from "../../lib/mui/js/mui.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      allcate: [],
      imgList: []
    };
  },
  methods: {
    getCategory() {
      // 获取全部分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 }); //添加全部分类，id为0
          this.allcate = result.body.message;
          // console.log(result.body);
        } else {
          Toast("图片分类获取失败！");
        }
      });
    },
    getImgList(cateid) {
      // 获取图片列表
      this.$http.get("api/getimages/" + cateid).then(result => {
        if (result.body.status == 0) {
          this.imgList = result.body.message;
        }
      });
    }
  },
  created() {
    this.getCategory();
    this.getImgList(0); //先获取全部分类
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
```

css:

``` scss
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.imglist {
  list-style: none;
  margin: 0;
  padding: 10px 10px 50px;
  li {
    background-color: #ccc;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgb(100, 100, 100);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
      margin: 0 auto;
      position: relative;
    }
    .img-title {
      width: 100%;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      // padding: 5px; 
      //这里为了解决不同分辨率设备下最后一行文字可能显示不全的情况，把padding改为border并设置overflow：hidden，border的透明度必须为0
      border: 5px solid rgba(0, 0, 0, 0);
      overflow: hidden;
      position: absolute;
      left: 0;
      bottom: 0;
      max-height: 88px;
      h4 {
        line-height: 20px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        color: #fff;
        font-size: 12px;
        line-height: 16px;
        margin: 0;
      }
    }
  }
}
</style>
```



#### 过程中出现的问题

1. 报错：`Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`

   是由于引入的mui.js中有非严格模式的代码，而 webpack默认是严格模式的，所以我们需要关闭严格模式：

   下载插件：

   ``` cmd
    cnpm i babel-plugin-transform-remove-strict-mode -D
   ```

   配置`.babelrc`文件：

   ``` markdown
   {
     "presets": ["env","stage-0"],
     "plugins": ["transform-runtime","transform-remove-strict-mode"]
   }
   ```

2. 功能完成后发现tabbar功能失效，原因是它的类名和引入的mui.js冲突,解决方案如下：

   手动打开`src/lib/mui/js/mui.js` ,输入`Ctrl+F` 查找`mui-tab-item`字段

   ``` js
   // 将
   var CLASS_TAB_ITEM = 'mui-tab-item';
   // 改成
   var CLASS_TAB_ITEM = 'mui-tab-item-x';
   ```

3. 图片懒加载需要在index.js中导入MintUI中的Lazyload：

   ``` js
   // 添加Lazyload
   import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
   Vue.use(Lazyload);
   ```

4. 往上滑动时分类列表挡在头部上面。需要给头部添加层级 `App.vue`：

   ``` css
   #header{
     z-index: 10000;
   }
   ```

   

### 图片详情

将图片列表页中class为`imglist`中的li改为`router-link`：

``` html
<ul class="imglist">
  <router-link :to="'/home/photoinfo/'+imgs.id" v-for="imgs in imgList" :key="imgs.id" tag="li">
    ...此处省略
  </router-link>
</ul>
```

创建 `PhotoInfo.vue` 并配置路由：

```js
import PhotoInfo from './components/photos/PhotoInfo.vue'
// 下面代码添加到路由列表中
{ path: '/home/photoinfo/:id', component: PhotoInfo }
```

由于用到缩略图，需要安装 [vue2-preview](https://www.npmjs.com/package/vue2-preview) 包：

``` cmd
cnpm i vue2-preview -S
```

然后在`index.js`中导入：

```js
import VuePreview from 'vue2-preview';
Vue.use(VuePreview);
```

编辑`PhotoInfo.vue`:

template:

``` html
<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="subimg">
      <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '5px'}"
        :previewBoxStyle="{}"
        :tapToClose="true"
      />
    </div>
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
```

css:

```scss
//注意这里不需要添加scoped，因为需要修改缩略图样式
<style lang="scss">
.newsinfo-container {
  padding: 0 4px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: #333;
  }
  .subtitle {
    font-size: 13px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
  .subimg {
    button {
      // 隐藏缩略图放大后的左右切换按钮
      display: none;
    }
    .pswp__img {
      width: 100% !important;
      height: auto !important;
    }
    .pswp__container {
      top: -30px;
    }
  }
  .content {
    color: #666;
    padding: 10px 5px;
    text-indent: 2em;
    img {
      width: 100%;
    }
  }
}
</style>
```

js:

``` js
<script>
import comment from "../subcomponent/comment.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {},
      list: []
    };
  },
  created() {
    this.getNewsInfo();
    this.getThumbnail();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取详情失败！");
        }
      });
    },
    getThumbnail() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          // console.log(result.body.message);
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        } else {
          Toast("缩略图获取失败！");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
```



## 商品购买页



按以下路径新建`Commodity.vue` 文件并配置路由：

``` js
import Commodity from './components/buy/Commodity.vue'
// 下面代码添加到路由列表中
{ path: '/home/buy', component: Commodity }
```

编辑`Commodity.vue` :

template:

``` html
<template>
  <div class="commodity-container">
    <div class="comm-item" v-for="comm in commodityList" :key="comm.id">
      <img :src="comm.img_url" :alt="comm.zhaiyao" />
      <h3 class="comm-title">{{comm.title}}</h3>
      <div class="price">
        <p>
          <span class="new-price">￥{{comm.sell_price}}</span>
          <span class="old-price">￥{{comm.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{comm.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button class="mint-button mint-button--danger mint-button--large" @click="getMore">加载更多</mt-button>
  </div>
</template>
```



Css:

``` css
<style lang="scss">
.commodity-container {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0 5px 50px;
  .comm-item {
    width: 49%;
    margin-bottom: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      height: 180px;
      min-height: 80px;
    }
    .comm-title {
      font-size: 16px;
    }
    .price {
      font-size: 14px;
      background-color: #eee;
      padding: 5px;
      padding-bottom: 0px;
      .old-price {
        text-decoration: line-through;
      }
      .new-price {
        color: #f00;
        font-size: 18px;
        padding-right: 10px;
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .mint-button {
    margin: 10px;
  }
}
</style>
```



js:

``` js
<script>
export default {
  data() {
    return {
      pageIndex: 1,
      commodityList: []
    };
  },
  created() {
    this.getCommodityList(this.id);
  },
  methods: {
    getCommodityList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status == 0) {
            console.log(result.body.message);
            this.commodityList = this.commodityList.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getCommodityList();
    }
  }
};
</script>
```



### 商品购买详情页

按以下路径新建`CommodityInfo.vue` 文件并配置路由：

``` js
import CommodityInfo from './components/buy/CommodityInfo.vue'
// 下面代码添加到路由列表中
{ path: '/home/commodityinfo/:id', component: CommodityInfo }
```

编辑Commodity.vue实现跳转到详情页：

``` html
<!-- 在class为comm-item的div上添加点击事件goDetail，并在methods中定义该方法 -->
<div class="comm-item" v-for="comm in commodityList" :key="comm.id" @click="goDetail(comm.id)">
  
<script>
//添加到methods中
goDetail(id){
  // 注意区分:
  // $router :  路由导航对象，用来实现路由前进后退跳转
  // $route : 路由参数对象，用来传递路由参数
  this.$router.push({path: '/home/commodityinfo/'+id})
}
</script>
```

创建选择购买数量子组件buy_numbox.vue:

``` html
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
```

编辑 CommodityInfo.vue：

template:

``` html
<template>
  <div class="buy-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :bannerList="bannerList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            售价：
            <span class="new-price">￥{{info.sell_price}}</span>&nbsp;&nbsp;
            <del>￥{{info.market_price}}</del>
          </p>
          <p>
            购买数量：
            <numbox></numbox>
          </p>
          <mt-button type="danger" size="small">立即购买</mt-button>
          <mt-button type="primary" size="small">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{info.goods_no}}</p>
          <p>库存信息：{{info.stock_quantity}}</p>
          <p>上架时间：{{info.add_time|MDHms}}</p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">详情介绍</div>
      <!--详情介绍组件-->
    </div>
    <div class="mui-card m-comment">
      <!--评论组件-->
    </div>
  </div>
</template>
```

Css:

``` scss
<style lang="scss" scoped>
.buy-container {
  background-color: #eee;
  overflow: hidden;
  padding-bottom: 50px;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .new-price {
    color: red;
    font-size: 20px;
  }
  .m-comment{
    padding: 0 5px;
  }
}
</style>
```

js:

``` js
<script>
import swiper from "../subcomponent/swiper.vue";
import numbox from "../subcomponent/buy_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      bannerList: [],
      info: []
    };
  },
  created() {
    this.getBanner();
    this.getInfo();
  },
  methods: {
    getBanner() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
        }
      });
    },
    getInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        }
      });
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>
```



#### 详情介绍、商品评论

创建BuyIntroduce.vue，配置路由：

```js
import BuyIntorduce from './components/buy/BuyIntroduce.vue

// 下面代码添加到路由列表中
{ path: '/home/buyintorduce/:id', component: BuyIntorduce }
```

编辑 BuyIntroduce.vue：

``` scss
<template>
  <div class="introduce-container">
    <h3 class="title">{{introduce.title}}</h3>
    <hr />
    <div class="content" v-html="introduce.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduce: []
    };
  },
  created() {
    this.getIntroduce();
  },
  methods: {
    getIntroduce() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.introduce = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="scss">
.introduce-container {
  padding: 0 4px 50px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: #333;
  }
  .content {
    p {
      margin: 0;
      img {
        width: 100%;
        display: block;
      }
    }
    table {
      width: 100%;
      td {
        img {
          width: 100%;
          display: block;
        }
        img[width="165"]{
          // 解决佳能单反套机和联想15.6电脑图文详情中图片显示宽度样式冲突
          width: 165px;
        }
      }
    }
  }
}
</style>
```

在CommodityInfo.vue中导入组件：

```js
import buyintorduce from "../buy/BuyIntroduce.vue";
import buycomment from "../subcomponent/comment.vue";
```

导入完成后在components里注册这两组件，然后添加到template里：

``` html
<div class="mui-card">
  <div class="mui-card-header">详情介绍</div>
  <buyintorduce></buyintorduce>
</div>
<div class="mui-card m-comment">
  <buycomment :id="id"></buycomment>
</div>
```



## 上传到github

使用`.gitgonre`屏蔽以下文件:

``` txt
node_modules
.vscode
.git
```

创建 `README.md` 用来编写文档

在github上新建一个空的储存库 `Vue-project`

```git
//全局设置:
git config --global user.name "code7s"
git config --global user.email "code7s@qq.com"
//上传到本地git仓库:
git init
git commit -m "first commit"
//上传到github:
git remote add origin https://gitee.com/code7s/Vue-project.git
git push -u origin master
```


