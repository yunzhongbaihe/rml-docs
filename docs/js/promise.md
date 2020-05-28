# Promise
### 1、写法
```javascript
// pending 准备阶段
// resolved 成功状态
// rejected 拒绝状态
// 单向、不可撤销
new Promise((resolve, reject) => {
    resolve('操作成功');
}).then(value => {
    console.log('成功的业务处理');
}, reason => {
    console.log('拒绝的业务处理');
});
// 后面的then是对前一个promise的处理
```