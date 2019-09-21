# Vue项目

## 所用技术栈

1. Vue2.x

2. Mint-UI

3. MUI

   



## 开始项目



安装Mint-UI: `npm install mint-ui -S`

## header

使用[MintUI](http://mint-ui.github.io/docs/#/zh-cn2/)

在index.js中导入组件:

```js
// 按需导入MintUI*
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'; //vue2.5需导入css
Vue.component(Header.name, Header);
```



## footer

使用 [MUI](https://dev.dcloud.net.cn/mui/)

**MUI无法使用npm安装需要手动在github上下载,然后把dist文件夹改名为mui复制到自己的项目`src/lib`中**

解压后的MUI在examples文件夹中复制想要的模板到自己项目中

在index.js中导入

```js	
import './lib/mui/css/mui.min.css';
```

## 上传到github

创建`.gitgonre`文件

