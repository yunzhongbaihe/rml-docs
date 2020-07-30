let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let ejs = require('ejs');
let indexRouter = require('./routes/index');
let app = express();

// 视图模板设置
app.engine('.html', ejs.__express); // 设置视图引擎后缀，为.html
app.set('views', path.join(__dirname, 'views')); // 设置视图目录路径
app.set('view engine', 'html'); // 设置视图引擎为html

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// 设置静态文件目录路径，例如这样的目录结构public/images/1.png
// 在设置img标签的src值的时候可以直接这样写src="/images/1.png"
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// 捕获404并转发到错误处理程序
app.use(function(req, res, next){
	next(createError(404));
});

// 错误处理程序
app.use(function(err, req, res, next){
	// 设置本地变量，仅在开发中提供错误
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// 渲染错误页面
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;