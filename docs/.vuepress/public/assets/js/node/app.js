var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
var app = express();

// 视图模板设置
app.engine('.html', ejs.__express); // 设置视图引擎后缀，为.html
app.set('views', path.join(__dirname, 'views')); // 设置视图目录路径
app.set('view engine', 'html'); // 设置视图引擎为html

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
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