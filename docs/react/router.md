# react-router
### 1、react-router-dom
```md
HashRouter 地址栏存在hash，例如 http://localhost:3000/user#/user
	路由外层盒子，里面的内容是单页面应用的路由以及路由组件
BrowserRouter 地址栏没有hash，例如 http://localhost:3000/user
	路由外层盒子，里面的内容是单页面应用的路由以及路由组件
Redirect 重定向，例如 <Redirect to={'/login'}/>
Switch 其中的<Route/>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配
Route 路由界面，path代表路径，component代表路径所对应的界面
	<Route path={'/home'} component={HomeComp}/>
Link 点击切换到组件的链接
withRouter 把非路由组件包装返回一个新组件，新组件中存在3个属性 history/location/match
```
```jsx
import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                {/*只匹配其中一个*/}
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/'} component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
```