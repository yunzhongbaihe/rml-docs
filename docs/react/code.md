# 具体内容
::: tip 三大体系
<div style="height:5px;"></div>

React.js 用于Web开发和组件的编写<br/>
ReactNative 用于移动端开发<br/>
ReactVR 用于虚拟现实技术的开发
:::
### 开发环境的搭建
```text
npm install -g create-react-app // 官方脚手架
mkdir `文件夹名称` // 新建文件夹
cd `文件夹名称`
create-react-app `项目名称` // 创建项目
cd `项目名称`
npm start // 启动项目
```
### 文件说明
> /src/index.js 入口文件
```jsx harmony
import React from 'docs/react/react';
import ReactDom from 'react-dom';
import App from './App.js';
ReactDom.render(<App/>, document.getElementById('root'));
```
> /src/App.js 组件文件
```jsx harmony
// Fragment：文档碎片
import React, {Component,Fragment} from 'docs/react/react';
class App extends Component{
   render(){
   	    return (<Fragment><div>Hello World</div></Fragment>);
   }
}
export default App;
```
> 数据的改变
```jsx harmony
this.setState({'需要改变值的名称':'新值'});
```
> 父子组件的传值
```jsx harmony
// 父组件
<ChildComp content="这是来自父组件的信息"/>
// 子组件 
import React,{Component} from 'docs/react/react';
class ChildComp extends Component{
    render(){
        return (<div>{this.props.content}</div>)
    }
}
```