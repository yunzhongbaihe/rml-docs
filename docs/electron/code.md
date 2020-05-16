# 具体内容
### 配置：`main.js`
```javascript
var electron = require('electron');
var app = electron.app; // 引用app
var globalShortcut = electron.globalShortcut; // 全局快捷键
var BrowserWindow = electron.BrowserWindow; // 窗口引用
var mainWindow = null; // 声明要打开的主窗口
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
        	// 如果需要在渲染进程中使用Node的话，此处需要配置该属性为true
            nodeIntegration: true
        }
    });
    // mainWindow.webContents.openDevTools(); // 打开调试模式
    // require('./main/menu.js');
    mainWindow.loadFile('index.html'); // 加载html页面
    // 主线程中嵌入网页
    // var BrowserView = electron.BrowserView;
    // var view = new BrowserView();
    // mainWindow.setBrowserView(view);
    // view.setBounds({x: 0, y: 120,width: 120,height: 120});
    // view.webContents.loadURL('https://www.baidu.com');
    // 注册快捷键
    // globalShortcut.register('ctrl+e', function() {
    //     mainWindow.loadURL('https://www.baidu.com');
    // });
    // let isRegister = globalShortcut.isRegistered('ctrl+e') ? '注册成功' : '注册失败';
    // console.log(isRegister);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
// app.on('will-quit', function() {
//     // 注销全局快捷键
//     globalShortcut.unregisterAll();
// });
```
### 配置：`./render/index.js`
```javascript
var fs = require('fs'); // Nodejs中的文件系统模块
var electron = require('electron');
var remote = electron.remote; // 在渲染进程中需要从`remote`中获取需要的模块
var {Menu, BrowserWindow, dialog, clipboard} = remote;
var {shell} = electron;
```
### 渲染进程：`打开新的窗口`
```javascript
var newWin = new BrowserWindow({
    width: 300,
    height: 300
});
newWin.loadFile('index.html'); // 加载文件
newWin.on('close', () => {
    newWin = null;
});
```
### 渲染进程：`渲染右键菜单`
```javascript
var rightTemplate = [
    {label: '粘贴', accelerator: 'ctrl+c'},
    {label: '复制', accelerator: 'ctrl+v'},
];
var rightMenu = Menu.buildFromTemplate(rightTemplate); // 构建右键菜单
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    rightMenu.popup({window: remote.getCurrentWindow});
});
```
### 渲染进程：`在浏览器中打开链接`
```javascript
shell.openExternal(`需要打开的链接地址`);
```
### 渲染进程：`打开图片选择对话框`
```javascript
dialog.showOpenDialog({
    title: '请选择',
    defaultPath: '',
    filters: [{name: 'img', extensions: ['jpg', 'gif', 'jpeg', 'png']}], // 限制选择文件类型
    buttonLabel: '按钮名称', // 自定义按钮的名称
}).then(result => {
	// result.filePaths 这是一个数组，返回的是文件的绝对地址
}).catch(err => {
    console.log(err);
});
```
### 渲染进程：`打开保存对话框`
```javascript
dialog.showSaveDialog({
    title: '保存文件'
}).then(result => {
	// result.filePath 文件保存的位置
    fs.writeFileSync(result.filePath, '文件内容');
}).catch(err => {
    console.log(err);
});
```
### 渲染进程：`打开消息对话框`
```javascript
dialog.showMessageBox({
    type: 'warning',
    title: '标题',
    message: '内容',
    buttons: ['按钮1', '按钮2']
}).then(function(result) {
    // result.response 返回的是点击按钮的下标
});
```
### 渲染进程：`断网提醒测试`
```javascript
window.addEventListener('online', function() {
    alert('在线')
});
window.addEventListener('offline', function() {
    alert('离线')
});
```
### 渲染进程：`通知消息`
```javascript
var option = {
    title: '通知消息标题',
    body: '通知消息内容'
};
new window.Notification(option.title, option);
```
### 渲染进程：`复制`
```javascript
clipboard.writeText('需要复制的内容');
alert('复制成功');
```