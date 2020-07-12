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
    // 在组件中`computed`属性里使用`...mapGetters()`进行映射
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
    // 必须是同步函数，通过`commit`触发，在组件中`methods`属性里使用`...mapMutations()`进行映射
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
    // 通过`dispatch`触发，在组件中`methods`属性里使用`...mapActions()`进行映射
    actions: {
        changeCount({commit, state}, payload) {
            commit('changeCount');
        }
    },
});
```
### 4、在组件中进行映射
```javascript
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
    name: 'App',
    mounted(){
        
        // `editBookId`没在`methods`中映射，所以需要这样子触发
        this.$store.dispatch('editBookId', 123456789);
        this.$store.commit('editBookId', 987654321);

        // 在`methods`属性中进行映射后，只需要进行调用并且传递相关参数就可以
        this.editBookId(123456789);

    },
    computed: {
		// 注意`bookId`需要在`getters`属性中进行定义
        ...mapGetters(['bookId']),
    },
    methods: {
		// 注意`editBookId`需要在`mutations、actions`属性中进行定义
        ...mapMutations(['editBookId']),
        ...mapActions(['editBookId']),
    }
}
```
### 5、命名空间
```js
const user = {
	namespaced: true, // 命名空间，使用路径形式，例如：this.$store.commit('user/setname')
	state: {
		name: 'This is a uesr module'
	},
	getters: {
		name: (state) => state.name,
	},
	mutations: {
		setname(state){
			state.name = 'hello user module';
		}
	},
};

// 定义仓库
const store = new Vuex.Store({
	state: {
		msg: 'store msg',
		count: 1
	},
	mutations: {
		add(state){
			state.count++;
		}
	},
	actions: {},
	// 模块
	modules: {
		user,
	},
});
```