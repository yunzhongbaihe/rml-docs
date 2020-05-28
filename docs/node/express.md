# Express
### 基于`Node.js`平台，快速、开放、极简的Web开发框架
### [API文档地址](http://nodejs.cn/api/)
### 1、使用express框架
```text
npm install express --save
```
### 2、开始第一个express项目
```markdown
1、express `项目名称`
2、cd `项目名称`
3、npm install
4、npm start
5、访问 `http://localhost:3000`
```
### 3、目录以及文件说明
```markdown
|-- rml-express-node
    |-- app.js  `程序main文件`
    |-- package-lock.json
    |-- package.json
    |-- bin `用于应用启动，可在里面设置启动的端口号等`
    |   |-- www
    |-- public `静态资源目录`
    |   |-- images
    |   |-- javascripts
    |   |-- stylesheets
    |-- routes  `可以认为是controller（控制器）目录，路由`
    |   |-- index.js
    |-- views   `jade模板目录，可以认为是view(视图)目录`
        |-- error.html
        |-- index.html
```
### 4、app.js文件详解
<<< @/docs/.vuepress/public/assets/js/node/app.js
### 5、模块说明
```markdown
1、当前文件所在的位置：`__dirname`，例如E:\SOFTCENTER\rml-express-node\routes
2、当前文件的路径地址：`__filename`，例如E:\SOFTCENTER\rml-express-node\routes\index.js
3、异步读取文件：`fs.readFile(path[, options], callback)`，回调参数(err, data)其中data是文件的内容
4、同步读取文件：`fs.readFileSync(path[, options])`
5、异步写入文件：`fs.writeFile(file, data[, options], callback)`，回调参数(err)
6、同步写入文件：`fs.writeFileSync(file, data[, options])`
```
### 6、路由访问(routes/index.js)
```javascript
let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');
// multer 用于解析post文件 multipart/form-data
// body-parser 用于解析post数据 application/x-www.form-urlencoded
let multer = require('multer');

// 渲染首页
router.get('/', function(req, res, next){
	// res.render的第一个参数为：需要渲染的文件名称，例如views/index.html，此时可以写index
	// res.render的第二个参数为：渲染页面时绑定的参数(非必须)，文件中可以使用<%= 参数名称 %>获取值
	res.render('index', {title: 'rml-express-node'});
});

var storage = multer.diskStorage({
	// 定义文件保存目录
	destination: function(req, file, cb){
		cb(null, path.resolve(__dirname, '../public/upload'));
	},
	// 定义文件保存名称
	filename: function(req, file, cb){
		cb(null, file.originalname);
	}
});
router.post('/upload', multer({storage: storage}).any(), function(req, res){
	// 文件信息：req.files[0]
	//  {
	//     fieldname: 'uploadFile',
	//     originalname: '11.png',
	//     encoding: '7bit',
	//     mimetype: 'image/png',
	//     destination: 'E:\\SOFTCENTER\\rml-express-node\\public\\upload',
	//     filename: 'a2b9d8a3a588fe7bd33d48d59fcfe4bb',
	//     path: 'E:\\SOFTCENTER\\rml-express-node\\public\\upload\\a2b9d8a3a588fe7bd',
	//     size: 709
	//   }
	var itemFile = req.files[0];
	try{
		let data = fs.readFileSync(
			path.resolve(__dirname, `../public/upload/${itemFile.originalname}`)
		);
		if(data){
			res.send(JSON.stringify({
				msg: '上传成功',
				filename: itemFile.originalname
			}));
		}else{
			res.send(JSON.stringify({
				msg: '上传失败',
				filename: itemFile.originalname
			}));
		}
	}catch(e){
		res.send(JSON.stringify({
			msg: '上传失败',
			filename: itemFile.originalname
		}));
	}
});

module.exports = router;
```