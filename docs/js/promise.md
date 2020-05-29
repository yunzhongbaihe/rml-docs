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
}).finally(() => {
    console.log('永远会执行');
}).catch(error => {
    console.log('在这里捕捉错误');
});
// 后面的then是对前一个promise的处理
```
### 2、定制错误信息
```javascript
class ParamError extends Error{
    constructor(msg){
        super(msg);
        this.name = 'ParamError';
    }
}
console.log(new ParamError('参数错误').message);
```