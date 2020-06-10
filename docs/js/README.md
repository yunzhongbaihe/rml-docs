# JavaScript
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