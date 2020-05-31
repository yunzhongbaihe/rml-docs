# vuex
### 1、Vuex是什么？
```md
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
它采用集中式存储管理应用的所有组件的状态
并以相应的规则保证状态以一种可预测的方式发生变化。
```
### 2、开始
```md
每一个 Vuex 应用的核心就是 store（仓库）
“store”基本上就是一个容器
它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
    - Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候
      若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
    - 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
```
### 3、简单的Store
```js
const store = new Vuex.Store({
    // 状态
    state: {
        count: 1
    },
    getters: {
        getCount(state){
            return state.count++;
        }
    },
    // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
    // Vuex 中的 mutation 非常类似于事件：
    // 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
    // 不能直接调用mutations中的事件，需使用 store.commit 方式，
    // 例如 store.commit('changeCount');
    // 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    // 载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
    mutations: {
        changeCount(state, payload) {
            state.count += payload;
        }
    },
    // 类似于 mutation
    // Action 提交的是 mutation，而不是直接变更状态
    // Action 可以包含任意异步操作
    // Action 通过 store.dispatch 方法触发
    // 例如 store.dispatch('changeCount')
    // Actions 支持同样的载荷方式和对象方式进行分发
    actions: {
        changeCount({commit, state}, payload) {
            commit('changeCount');
        }
    },
});
```