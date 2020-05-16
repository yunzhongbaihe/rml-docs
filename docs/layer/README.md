# 参数说明
### 用法

<div style="height:10px;"></div>

- 消息提示框：`alert`
```javascript
$.layer.alert({
    isNow: 1,
    title: '标题',
    layerIcon: 'warn', // 图标类型：warn、error、question、success
    content: '内容',
    fn: function(result){
        // result：true
    },
});
```
- 消息确认框：`confirm`
```javascript
$.layer.confirm({
    isNow: 1,
    title: '标题',
    content: '内容',
    layerIcon: 'question', // 图标类型：warn、error、question、success
    style: {width: 500, height: 250}, // 设置弹框的宽高
    fn: function(result){
        // result：true or false
    },
});
```
- 输入对话框：`prompt`
```javascript
$.layer.prompt({
    isNow: 1,
    title: '标题',
    fn: function(result){
    	// result：如果点击的是取消按钮，返回的是null；如果点击的是确定按钮，返回的是输入框中输入的值
    },
});
```
- 使用页面存在的元素进行弹层初始化
```javascript
// <div id="pageLayer01" style="display:none;">这是页面中存在的元素</div>
var $pageLayer01 = $(`元素选择器`).layer({
    isNow: 1,
    closed: true,
    enableTitle: true,
    title: '标题',
    enableClose: true,
});
$pageLayer01.layer('show');
```
### 属性
| 属性名 | 描述 | 属性值类型 | 默认值 |
| :-----| :---- | :---- | :---- |
| isNow | 标记 | number | 1 |
| href | 通过链接地址获取弹框的主体内容 | string | '' |
| method | 获取弹框主体内容方式 | string | post |
| queryParams | 获取弹框主体内容请求的参数 | object | {} |
| title | 弹框标题 | string | New Layer |
| content | 弹框主体内容 | string | New Layer Context |
| enableClose | 是否开启关闭按钮 | boolean | false |
| enableTitle | 是否开启标题栏目 | boolean | false |
| modal | 是否开启遮罩层 | boolean | true |
| closed | 如果是页面中存在的元素，请设置此参数为true<br/>如果为true，关闭的时候对话框是隐藏而不是移除 | boolean | false |
| zIndex | 弹框层级 | number | 1000 |
| drawerPos | 抽屉弹框出现的位置<br/>top、right、bottom、left | string | right |
| maskClosable | 是否开启点击蒙层关闭弹框 | boolean | false |
| style | 设置弹框的样式 | object | {} |
| buttons | 弹框底部按钮组<br/>{text:`按钮文字`,cls:`按钮类名`,handler:`点击按钮执行回调函数`} | array | [] |
### 事件
| 事件名 | 事件参数 | 描述 |
| :-----| :---- | :---- |
| onOpen | none | 弹框打开后的钩子函数 |
| fn | true or false | 弹框取消、确定执行的函数，这个函数只存在于使用以下方法创建的弹框中<br/>`$.layer.alert`、`$.layer.confirm`、`$.layer.drawer`、`$.layer.prompt` |
### 方法
| 方法名 | 方法参数 | 描述 |
| :-----| :---- | :---- |
| options | none | 返回属性对象，代码示例：`$('<div></div>').layer('options');` |
| show | none | 弹框显示，代码示例：`$('<div></div>').layer('show');` |
| close | none | 弹框关闭，代码示例：`$('<div></div>').layer('close');` |
| destory | none | 弹框销毁，代码示例：`$('<div></div>').layer('destory');` |