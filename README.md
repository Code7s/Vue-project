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

运行 `cnpm i` 后在index.js中导入Vue,如果存在包之间版本不对应请看 [webpack总结](https://www.code7s.com/20190907/webpack学习总结/)

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
    <mt-header fixed title="Code7s Vue项目"></mt-header>
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

配置路由模块:

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

编辑Home.vue

``` html
<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import{ Toast } from 'mint-ui'
export default {
  data() {
    return {
      bannerList: [] //轮播
    };
  },
  methods: {
    getBanner() {
      this.$http
        .get("api/getlunbo")
        .then(result => {
          if (result.body.status===0) {
            this.bannerList=result.body.message
          }else{
            Toast('加载轮播图失败')
          }
        });
    }
  },
  created() {
    this.getBanner();
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    img{
      width: 100%;
      height: 100%;
    }  
  }
}
</style>
```

### 六宫格

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
```

把Newsinfo.vue中的id值传给子组件:

``` html
在Newsinfo中的评论组件添加:newsid="this.id"
<comment-box :newsid="this.id"></comment-box>
```

编辑comment.vue:

tampalate:

``` html
<div class="comment-box">
  <h3>发表评论:</h3>
  <textarea placeholder="请输入评论内容..." cols="30" rows="6"></textarea>
  <mt-button class="mint-button mint-button--primary mint-button--large">评论</mt-button>
  <div class="comment-list">
    <div class="cmt-item" v-for="comment in commentList" :key="comment.index">
      <p class="cmt-title">
        {{comment.user_name}}
        <span>{{comment.add_time|MDHms}}</span>
      </p>
      <div class="cmt-body">{{comment.content}}</div>
    </div>
  </div>
</div>
```

style:

``` css
<style lang="scss" scoped>
.comment-box {
  h3 {
    font-size: 16px;
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
      pageIndex: 1
    };
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.newsid + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.commentList = result.body.message;
            console.log(this.commentList);
            
          } else {
            Toast("加载评论列表失败");
          }
        });
    }
  },
  props: ["newsid"],
  created() {
    this.getComments();
  }
};
</script>
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
//上传到本地git:
git init
git commit -m "first commit"
//上传到github:
git remote add origin https://gitee.com/code7s/Vue-project.git
git push -u origin master
```


