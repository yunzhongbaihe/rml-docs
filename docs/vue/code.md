# 具体内容
### 创建一个vue实例
```html
<div id="app">{{msg}}</div>
```
```javascript
var vm = new Vue({
    el: '#app',
    data: {
    	msg: 'Hello Vue',
    	htmlStr: '<span style="color:red;">这里是html</span>',
    	textColor: 'colorBlue',
    }
});
```
```css
.colorBlue {
    color: blue;
}
```
### 数据与方法
```javascript
// vm.$data === data; // true
vm.$watch('msg', (newVal, oldVal) => {
	console.log(newVal, oldVal);
});
```
### 生命周期
```javascript
var vm = new Vue({
    el: '#app',
    data: {
    	msg: 'Hello Vue'
    },
    beforeCreate(){
    	console.log('beforeCreate');
    },
    created(){
    	console.log('created');
    },
    beforeMount(){
    	console.log('beforeMount');
    },
    mounted(){
    	console.log('mounted');
    },
    beforeUpdate(){
    	console.log('beforeUpdate');
    },
    updated(){
    	console.log('updated');
    },
});
```
### 模板语法-插值
```html
<div>{{msg}}</div>
<div v-once>{{msg}}</div>
<div v-html="htmlStr"></div>
<!-- 属性绑定 -->
<div :class="textColor">{{msg}}</div>
<!-- 运算 -->
<div>{{true ? '真的' : '假的'}}</div>
```