# Vue3
### 1、剖析
```js
let toProxy = new WeakMap(); // 弱引用映射表，es6 放置的是 原对象:代理过的对象
let toRaw = new WeakMap(); // 被代理过的对象:原对象
// 判断是不是对象
function isObject(val){
    return typeof val === 'object' && val != null;
}
function hasOwn(target, key){
    return target.hasOwnProperty(key);
}
// 响应式的核心方法
function reactive(target){
    return createReactiveObject(target);
}
// 创建响应式对象
function createReactiveObject(target){
    if(!isObject(target)){
        return target;
    }
    // 如果已经代理过，就将代理过的对象返回
    let proxy = toProxy.get(target);
    if(proxy){
        return proxy;
    }
    // 防止代理过的对象再次被代理
    if(toRaw.has(target)){
        return target;
    }
    // proxy + reflect 反射
    let baseHandler = {
        get(target, key, receiver){
            let result = Reflect.get(target, key, receiver);
            // 收集依赖 订阅
            track(target, key);
            return isObject(result) ? reactive(result) : result;
        },
        set(target, key, value, receiver){
            let hadKey = hasOwn(target, key);
            let oldValue = target[key];
            let result = Reflect.set(target, key, value, receiver);
            if(!hadKey){ // 新增
                trigger(target, 'add', key);
            }else if(oldValue !== value){ // 修改
                trigger(target, 'set', key);
            }
            return result;
        },
        deleteProperty(target, key){
            let result = Reflect.deleteProperty(target, key);
            return result;
        }
    };
    let observed = new Proxy(target, baseHandler);
    toProxy.set(target, observed);
    toRaw.set(observed, target);
    return observed;
}
// 栈
let activeEffectStacks = [];
let targetsMap = new WeakMap();
function track(target, key){
    let effect = activeEffectStacks[activeEffectStacks.length - 1];
    if(effect){
        let depsMap = targetsMap.get(target);
        if(!depsMap){
            targetsMap.set(target, depsMap = new Map);
        }
        let deps = depsMap.get(key);
        if(!deps){
            depsMap.set(key, deps = new Set());
        }
        if(!deps.has(effect)){
            deps.add(effect);
        }
    }
}
function trigger(target, type, key){
    let depsMap = targetsMap.get(target);
    if(depsMap){
        let deps = depsMap.get(key);
        if(deps){
            deps.forEach(effect => {
                effect();
            });
        }
    }
}
// 响应式 副作用
function effect(fn){
    let effect = createReactiveEffect(fn);
    effect();
}
function createReactiveEffect(fn){
    let effect = function(){
        return run(effect, fn);
    };
    return effect;
}
function run(effect, fn){
    try{
        activeEffectStacks.push(effect);
        fn();
    }finally{
        activeEffectStacks.pop();
    }
}
// 代理对象
let proxy = reactive({name: 'zf'});
effect(() => {
    console.log(proxy.name);
});
proxy.name = 'rml';
```