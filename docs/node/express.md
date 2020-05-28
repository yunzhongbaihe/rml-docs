# Express
### 基于`Node.js`平台，快速、开放、极简的Web开发框架
### 1、使用express框架
```text
npm install express --save
```
### 2、开始第一个express项目
```text
1、express `项目名称`
2、cd `项目名称`
3、npm install
4、npm start
5、访问 http://localhost:3000
```
### 3、目录以及文件说明
![express目录](/rml-docs/assets/img/expressCatalogue.jpg)
```text
/bin: 用于应用启动，可在里面设置启动的端口号等
/public: 静态资源目录
/routes：可以认为是controller（控制器）目录，路由
/views: jade模板目录，可以认为是view(视图)目录
/app.js：程序main文件
```
### 4、app.js文件详解
<<< @/docs/.vuepress/public/assets/js/node/app.js
### 5
```text
1、__dirname：当前文件所在的位置，例如(E:\SOFTCENTER\rml-express-node\routes)
2、__filename：当前文件的路径地址，例如(E:\SOFTCENTER\rml-express-node\routes\index.js)
```