# 实例
### 1、太极图
```js
var canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
// 获取绘制环境
var ctx = canvas.getContext('2d');
//绘制左侧的白色半圆直径都是150
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.arc(150, 150, 150, 1.5 * Math.PI, Math.PI / 2, false);
ctx.closePath();
ctx.fill();
//绘制右侧的黑色半圆
ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.arc(150, 150, 150, Math.PI / 2, 1.5 * Math.PI, false);
ctx.closePath();
ctx.fill();
//绘制下面的黑色圆
ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.arc(150, 225, 75, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();
//绘制上面的白色圆
ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.arc(150, 75, 75, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();
//绘制两个小圆
ctx.fillStyle = "#fff";
ctx.beginPath();
ctx.arc(150, 225, 20, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();
//绘制黑色小圆
ctx.fillStyle = "#000";
ctx.beginPath();
ctx.arc(150, 75, 20, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();
```
### 2、绘制文本
```js
var canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext('2d'); // 获取绘制环境

ctx.font = '100px Georgia'; // 设置字体
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 设置文字阴影的颜色
ctx.shadowOffsetX = 6; // 阴影向右移动
ctx.shadowOffsetY = 4; // 阴影向上移动
ctx.shadowBlur = 10; // 轻微模糊阴影

// 垂直基准点
ctx.textBaseline = 'top';
ctx.fillStyle = 'red';
ctx.fillText('世界各族人民万岁', (canvas.width -  getWordSize('世界各族人民万岁').width) / 2, 130);

// 空心字
var word = '中华人民共和国万岁';
var w = ctx.measureText(word).width; // 获取文字的宽度
ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // 设置文字阴影的颜色
ctx.shadowOffsetX = 5; // 将阴影向右移动
ctx.shadowOffsetY = 3; // 将阴影向上移动
ctx.shadowBlur = 2; // 轻微模糊阴影
ctx.strokeStyle = '#888';
ctx.strokeText(word, (canvas.width - w) / 2, (canvas.height -  getWordSize(word).height) / 2);
ctx.restore();

function getWordSize(word){
    var p = document.createElement('p');
    p.style.position = 'absolute';
    p.style.left = 0;
    p.style.top = 0;
    p.style.zIndex = '-1';
    p.innerText = word;
    p.style.fontSize = '100px';
    document.body.append(p);
    var width = p.offsetWidth,
        height = p.offsetHeight;
    document.body.removeChild(p);
    return {
        width: width,
        height: height
    }
}
```
### 3、绘制画像
```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = new Image;
image.onload = function(){
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.drawImage(this, 0, 0);
};
image.src = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/' +
            'u=2948080203,1246421336&fm=173&app=25&f=JPEG' +
            '?w=640&h=427&s=F00260BC9C4778CE643818400300F099';
```
### 4、背景平铺
```js
var canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext('2d'); // 获取绘制环境
var image = new Image();
image.src = 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/' +
    'u=729870458,550237443&fm=173&app=25&f=JPG' +
    '?w=218&h=146&s=DB43438EF20014EECA122007030070DA';
image.onload = function(){
    draw(this);
};
function draw(obj){
    ctx.fillStyle = ctx.createPattern(obj, 'repeat');
    ctx.fillRect(0, 0, 300, 300);
}
```
### 5、鼠标画线
```js
var canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext('2d'); // 获取绘制环境
ctx.lineWidth = 2;
canvas.onmousedown = function(event){
    event = event || window.event;
    var left = event.clientX - canvas.offsetLeft;
    var top = event.clientY - canvas.offsetTop;
    ctx.moveTo(left, top);
    document.onmousemove = function(event){
        event = event || window.event;
        var left = event.clientX - canvas.offsetLeft;
        var top = event.clientY - canvas.offsetTop;
        ctx.lineTo(left, top);
        ctx.stroke();
    };
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
```
### 6、绘制时钟
```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;
var r = width / 2;
var rem = width / 200;
var PI = Math.PI;
// 绘制表盘
function drawBackground(){
	ctx.save();
	ctx.translate(r, r);
	ctx.beginPath();
	ctx.lineWidth = 10 * rem;
	ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * PI, false);
	ctx.stroke();
	var hourNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
	ctx.font = 18 * rem + 'px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	hourNumber.forEach(function(item, index){
		var rad = 2 * PI / 12 * index;
		var x = Math.cos(rad) * (r - 30 * rem);
		var y = Math.sin(rad) * (r - 30 * rem);
		ctx.fillText(item, x, y);
	});
	for(var i = 0; i < 60; i++){
		var rad = 2 * PI / 60 * i;
		var x = Math.cos(rad) * (r - 18 * rem);
		var y = Math.sin(rad) * (r - 18 * rem);
		ctx.beginPath();
		if(i % 5 === 0){
			ctx.fillStyle = '#000';
			ctx.arc(x, y, 2 * rem, 0, 2 * PI, false);
		}else{
			ctx.fillStyle = '#ccc';
			ctx.arc(x, y, 2 * rem, 0, 2 * PI, false);
		}
		ctx.fill();
	}
}
// 绘制时针
function drawHour(hour, minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * PI / 12 * hour;
	var mrad = 2 * PI / 12 / 60 * minute;
	ctx.rotate(rad + mrad);
	ctx.lineWidth = 6 * rem;
	ctx.lineCap = 'round';
	ctx.moveTo(0, 10 * rem);
	ctx.lineTo(0, -r / 2);
	ctx.stroke();
	ctx.restore();
}
// 绘制分针 
function drawMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * PI / 60 * minute;
	ctx.rotate(rad);
	ctx.lineWidth = 3 * rem;
	ctx.lineCap = 'round';
	ctx.moveTo(0, 10 * rem);
	ctx.lineTo(0, -r + 30 * rem);
	ctx.stroke();
	ctx.restore();
}
// 绘制秒针
function drawSecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#f00';
	var rad = 2 * PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2, 20 * rem);
	ctx.lineTo(2, 20 * rem);
	ctx.lineTo(1, -r + 18 * rem);
	ctx.lineTo(-1, -r + 18 * rem);
	ctx.fill();
	ctx.restore();
}
// 绘制时针、分针、秒针重叠处圆点
function drawDot(){
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0, 0, 3 * rem, 0, 2 * PI, false);
	ctx.fill();
}

function draw(){
	ctx.clearRect(0, 0, width, height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drawBackground();
	drawHour(hour, minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	ctx.restore();
}

draw();
setInterval(draw, 1000);
```