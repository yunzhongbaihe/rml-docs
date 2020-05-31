# promise
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
### 3、批量获取数据(Promise.all)
```javascript
const promise1 = new Promise((resolve, reject) => {
    resolve('第一个异步');
}).catch(error => { // 如果在该处处理的错误，此时返回的promise为解决状态
    console.log(error);
});

const promise2 = new Promise((resolve, reject) => {
    resolve('第二个异步');
});

Promise.all([promise1, promise2])
    .then(result => {
        // ["第一个异步", "第二个异步"]
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```
### 4、把多个promise结果收集起来(Promise.allSettled)
```javascript
const promise1 = new Promise((resolve, reject) => {
    resolve('第一个异步');
}).catch(error => { // 如果在该处处理的错误，此时返回的promise为解决状态
    console.log(error);
});

const promise2 = new Promise((resolve, reject) => {
    reject('第二个异步');
});

Promise.allSettled([promise1, promise2])
    .then(result => {
        // [{status: "fulfilled", value: "第一个异步"},{status: "rejected", reason: "第二个异步"}]
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```
### 5、后台请求超时处理(Promise.race)获取的是用时最短的promise数据
```javascript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('第一个异步');
    }, 3000);
}).catch(error => { // 如果在该处处理的错误，此时返回的promise为解决状态
    console.log(error);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('第二个异步');
    }, 300);
});

Promise.race([promise1, promise2])
    .then(result => {
        // 第二个异步
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```