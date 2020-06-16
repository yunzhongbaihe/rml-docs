# redux
```md
Components      发起 `Action`
Action          联系 `Store`
Store           找到 更新 `Components`，未找到 联系 `Reducers`
Reducers        找到 通知 `Store` 更新 `Components`
```
```js
let redux = require('redux);
let createStore = redux.createStore; // 创建

// 定义行为常量
const = ActionTypes = {
    ALL: 'ALL'
};

// 初始化状态
let initState = {
    users: [],
};

// reducer 返回新的状态，可以接收state，但是绝不可以修改state
function getUsers(state, action){
    state = state || initState;
	const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ActionTypes.ALL:
            return Object.assign({}, state, {
                users: [1, 2, 3]
            });
        default:
            return state;
    }
}

let store = createStore(getUsers);

// 订阅监听
// store.subscribe(function(){
//     var currentState = store.getState();
//     currentState.users.push(4, 5, 6);
// });

// action
function all(){
    return {
        type: ActionTypes.ALL
    }
}
store.dispatch(all()); // 派发
```