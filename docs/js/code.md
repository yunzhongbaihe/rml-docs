# 具体内容
### 1、监听浏览器页签状态
```js
function browerTabHandle(){
	let state = '';
	let visibilityChange = '';
	let hidden = '';
	if(typeof document.hidden !== "undefined"){
		hidden = "hidden";
		visibilityChange = "visibilitychange";
		state = "visibilityState";
	}else if(typeof document.mozHidden !== "undefined"){
		hidden = "mozHidden";
		visibilityChange = "mozvisibilitychange";
		state = "mozVisibilityState";
	}else if(typeof document.msHidden !== "undefined"){
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
		state = "msVisibilityState";
	}else if(typeof document.webkitHidden !== "undefined"){
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
		state = "webkitVisibilityState";
	}
	document.addEventListener(visibilityChange, () => {
		try{
			if(document[state] === 'visible'){
				// 此处是当前页签处于激活状态
			}else{
				// 此处是当前页签处于非激活状态
			}
		} catch(e){
		}
	}, false);
}
```
### 2、Proxy代理
```js
{
    let obj = {name: 'zhangsan', addr: 'beijing'};
    let objProxy = new Proxy(obj, {
        // 用来拦截对目标对象属性的访问
        get(target, key){
            if(key in target){
                return target[key];
            }
            throw new ReferenceError(`该对象 ${JSON.stringify(target)} 上不存在 ${key} 属性`);
        },
        // 设置
        set(target, key, value){
            if(key === 'age' && value > 100){
                throw new RangeError('年龄值无效');
            }
            if(typeof value === 'string'){
                value = value.trim();
            }
            target[key] = value;
        }
    });
    console.log(objProxy.name);
    objProxy.age = 60;
    objProxy.text = ' 这里一段有前后空格的文字 ';
    console.log(objProxy);
}
```