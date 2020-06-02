# router
### 说明
```md
router-link 路由入口
router-view 路由出口
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