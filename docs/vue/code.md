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
### 6、sync修饰符
```js
// 子组件触发
this.$emit('update:money', 9000);
```
```vue
<!-- 父组件监听 -->
<child-component
    :money="money"
    @update:money="money = $event">
</child-component>
```
为了方便起见，这种模式提供有一个缩写，即 *`.sync`* 修饰符：
```vue
<child-component :money.sync="money"></child-component>
```
### 7、2.0响应式原理
```js
let oldArrayPrototype = Array.prototype;
let proto = Object.create(oldArrayPrototype); // 继承
// 函数劫持，把函数进行重写，内部继续调用老的方法
['push', 'shift', 'unshift'].forEach(method => {
    proto[method] = function(){
        updateView();
        oldArrayPrototype[method].call(this, ...arguments);
    }
});
function observer(target){
    if(typeof target !== 'object' || target == null){
        return target;
    }
    // 拦截数组，给数组的方法进行重写
    if(Array.isArray(target)){
        Object.setPrototypeOf(target, proto);
        // target.__proto__ = proto;
    }
    for(let key in target){
        defineReactive(target, key, target[key]);
    }
}
function defineReactive(target, key, value){
    observer(value);
    Object.defineProperty(target, key, {
        get(){
            return value;
        },
        set(newValue){
            observer(newValue);
            if(newValue !== value){
                updateView();
                value = newValue;
            }
        }
    });
}
function updateView(){
    console.log('更新视图');
}
let data = {name: 'zf'};
observer(data);
data.name = 'rml';
console.log(data.name);
```
### 8、自定义指令
```js
// 调用
// <el-input type="text" v-model="money" v-checkinput="{oldVal:money,setVal:newVal=>(money=newVal)}"></el-input>
// 自定义指令，检测输入
Vue.directive('checkinput', {
	update(el, binding, vnode){
		// value 指令的值，例如v-checkinput=“hello”，此时值为hello
		// modifiers 指令后使用.连接的，例如v-checkinput.integer，此时值为{integer:true}
		const directiveVal = binding.value;
		let inputValue = directiveVal.oldVal;
		inputValue = inputValue.replace(/[^\d.]/g, ''); // 清除“数字”和“.”以外的字符
		inputValue = inputValue.replace(/\.{2,}/g, '.'); // 只保留第一个. 清除多余的
		inputValue = inputValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
		// 此处控制的是如果没有小数点，首位不能为0，例如 01、02、03
		inputValue && inputValue.indexOf('.') < 0 && (inputValue = inputValue * 1 + '');
		// 调用更新model方法，setVal名称是固定写法
		directiveVal.setVal(inputValue);
	},
});
```