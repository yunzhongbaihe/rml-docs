# 具体内容

<div style="height:10px;"></div>

### 认识WebPack的作用
<div style="margin-top:10px;"><img src="/rml-docs/assets/img/webpack.png"/></div>

### 安装
```sh
npm init
npm install --save-dev webpack
webpack ./src/entry.js -o ./dist/bundle.js 高版本需要这样使用
```
### 目录结构
```md
|-- rml-webpack-demo
    |-- dist `打包后文件目录`
    |-- node_modules
    |-- src
    |   |-- entery.js `入口文件`
    |-- package.json
    |-- package-lock.json
    |-- webpack.config.js `webpack配置文件`
```
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