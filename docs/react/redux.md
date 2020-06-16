# redux
> Component (发起`Action`，通过`Reducer`，做相关处理，返回新的`state`) <br>
  Action <br>
  Store <br>
  Reducer (只能接收`state`，不能改变`state`) <br>
### 1、react-redux
> 在展示的组件外使用`Provider`包裹，并注入`store`，如下：
```js
import React from 'react';
import ReactDom from 'react-dom';
import ReactReduxDemo from './ReactReduxDemo'; // 组件
import {Provider} from 'react-redux';
import store from './store/index'; // 仓库

ReactDom.render(
	(
		<Provider store={store}>
			<ReactReduxDemo/>
		</Provider>
	),
	document.getElementById('root')
);
```
> 组件内使用`connect`进行关联，如下：
```js
import React from 'react';
import {connect} from 'react-redux';

const ReactReduxDemo = (props) => {
	let {inputValue, changeInput, list, clickBtn} = props;
	return (
		<div>
			<input type="text" value={inputValue} onChange={changeInput}/>
			<button onClick={clickBtn}>添加</button>
			<ul>{list.map((item,index) => (<li key={index}>{item}</li>))}</ul>
		</div>
	)
};
const stateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list,
	}
}
const dispathToProps = (dispath) => {
	return {
		changeInput(e){
			dispath({type: 'changeInput', value: e.target.value});
		},
		clickBtn(){
			dispath({type: 'addItem'});
		}
	}
}
export default connect(stateToProps, dispathToProps)(ReactReduxDemo);
```
> store/index.js 如下：
```js
// 创建并导出仓库
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
export default store;
```
> store/reducer.js
```js
// 仓库管理员
const defaultState = {}; // 默认state

// 注意：只能接收 state，不能修改 state，需要拷贝一份 state，再进行修改，返回新的state
export default (state = defaultState, action) => {
	// 监听派发的action，通过判断type，做相关处理，例如如下：
	// if(action.type === 'changeInput'){
	//     let newState = JSON.parse(JSON.stringify(state));
	//     newState.inputValue = action.value;
	//     return newState;
	// }
	return state;
};
```