# Webpack3.0+

<div style="height:10px;"></div>

### 认识WebPack的作用
<div style="height:10px;"></div>

![webpack](/assets/img/webpack.png)

### 安装
```
npm init
npm install --save-dev webpack
webpack ./src/entry.js -o ./dist/bundle.js 高版本需要这样使用
```
### 目录结构
<div style="height:10px;"></div>

![目录结构](/assets/img/webpack01.jpg)
### webpack.config.js
```javascript
const path = require('path');
module.exports = {
    // 入口
    entry: {
        entry: './src/entery.js'
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // 如果有多个入口文件的话，此处可以使用入口文件的名称作为出口文件的名称
    },
    module: {},
    plugins: [],
    devServer: {}
};
```