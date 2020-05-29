# 具体内容
### 1、创建一个vue实例
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
### 2、数据与方法
```javascript
// vm.$data === data; // true
vm.$watch('msg', (newVal, oldVal) => {
	console.log(newVal, oldVal);
});
```
### 3、生命周期
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
### 4、模板语法-插值
```html
<div>{{msg}}</div>
<div v-once>{{msg}}</div>
<div v-html="htmlStr"></div>
<!-- 属性绑定 -->
<div :class="textColor">{{msg}}</div>
<!-- 运算 -->
<div>{{true ? '真的' : '假的'}}</div>
```
### 5、组件
```html
<div id="app">
    <div>{{msg}}</div>
    <child-comp :parent-give-money="money"></child-comp>
</div>
```
```javascript
new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue',
        money: 100,
    },
    // 定义子组件模块
    components: {
        ChildComp: {
            // 接收父组件传递的属性
            props: ['parentGiveMoney'],
            template: `
                <div>
                    <div>我是子组件</div>
                    <div>parentMethodsVal: {{parentMethodsVal}}</div>
                    <div>parentGiveMoney：{{parentGiveMoney}}</div>
                </div>
            `,
            data() {
                return {
                    parentMethodsVal: '',
                };
            },
            mounted() {
                // 调用父组件方法
                this.parentMethodsVal = this.$parent.getValue();
            },
        }
    },
    // 父组件方法定义
    methods: {
        getValue() {
            return `这是父组件getValue方法返回的值`;
        }
    }
});
```