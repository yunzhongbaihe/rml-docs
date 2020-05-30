# redux
### 1、redux的组成
```md
state old state ---> new state
action
reducer 春函数 返回 new state
state => action => reducer => new state
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

// reducer 返回新的状态
function getUsers(state, action){
    state = state || initState;
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