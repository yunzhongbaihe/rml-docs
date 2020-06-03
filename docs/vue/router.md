# router
### 说明
```md
router-link 路由入口
router-view 路由出口
$router VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如 push/replace/go
$route 当前正在跳转的路由对象，可以获取 name/path/params/query 等
```
### 1、简单使用
```vue
<div id="app">
    <div>
        <router-link to="/ebook">电子书</router-link>
        <router-link to="/apple">苹果商城</router-link>
    </div>
    <router-view></router-view>
</div>
```
```js
const router = new VueRouter({
	routes: [
		{path: '/ebook', component: {template: '<div>这里是：电子书</div>'}},
		{path: '/apple', component: {template: '<div>这里是：苹果商城</div>'}},
	]
});
new Vue({router: router}).$mount('#app');
```
### 2、路由传参
```vue
<div id="app">
    <div>
        <router-link :to="{path:'/ebook',query:{id:'123'}}">电子书</router-link>
        <router-link to="/apple/456">苹果商城</router-link>
        <router-link :to="{name:'tomato',params:{id:'987'}}">西红柿</router-link>
    </div>
    <router-view></router-view>
</div>
```
```js
const router = new VueRouter({
	routes: [
		{
			path: '/ebook', 
			component: {template: '<div>这里是：电子书，图书编号：{{this.$route.query.id}}</div>'},
		},
		{
			path: '/apple/:id', 
			component: {template: '<div>这里是：苹果商城，产品编号：{{this.$route.params.id}}</div>'},
		},
		{
			path: '/tomato', 
			name:"tomato", 
			component: {template: '<div>这里是：西红柿，编号：{{this.$route.params.id}}</div>'},
		},
	]
});
new Vue({router: router}).$mount('#app');
```
### 3、路由守卫
> 路由守卫
```js
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	routes: [
		{path: '/', redirect: '/dashboard'},
		{
			path: '/dashboard', 
			name: 'dashboard', 
			component: Dashboard,
			children: [
				{path: '/dashboard', redirect: '/dashboard/home'},
				{path: 'home', name: 'home', component: Home},
				{path: 'mine', name: 'mine', component: Mine},
			],
			beforeEach(to, from, next){
				// 这里操作局部路由守卫
				next();
			}
		},
		{path: '/login', name: 'login', component: Login},
	]
});

// 全局前置守卫
router.beforeEach({to, from, next} => {
	if(to.path !== '/login'){
		// 验证是否登录
		if(window.isLogin){
			next();
		}else{
			next(`/login?redirect=${to.path}`);
		}
	}
	next();
});

// 全局后置守卫
router.afterEach((to, from) => {
	console.log('router.afterEach');
});

export default router;
```
### 4、组件内的路由钩子
```js
<script>
	export default {
		name: 'Mine',
		beforeRouteEnter(to, from, next){
			console.log('beforeRouteEnter => 进入之前调用');
			next();
		},
		beforeRouteUpdate(to, from, next){
			console.log('beforeRouteUpdate => 路由参数更新了');
			next();
		},
		beforeRouteLeave(to, from, next){
			console.log('beforeRouteLeave => 离开前调用');
			next();
		},
	}
</script>
```
### 5、路由懒加载
```js
const router = new Router({
	routes: [
		{path: '/', redirect: '/dashboard'},
		{path: '/dashboard', name: 'dashboard', component: () => import('./views/Dashboard')},
	]
});
```