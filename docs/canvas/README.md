# canvas
### 1、什么是 Canvas？
```text
HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。
画布是一个矩形区域，您可以控制其每一像素。
canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
```
### 2、创建 Canvas 元素
```html
<canvas id="canvas" width="300" height="300"></canvas>
```
### 3、获取绘图环境
```js
canvas.getContext('2d')
```