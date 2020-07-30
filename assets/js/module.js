let module = (function(){
    let moduleList = []; // 模块容器
    let define = function(name, modules, action){
        modules.map((m, i) => {
            modules[i] = moduleList[m];
        });
        // 初始化模块
        moduleList[name] = action.apply(null, modules);
    };
    return {define};
})();

module.define('hd', [], function(){
    return {
        first(arr){
            return arr[0];
        },
        max(arr, key){
            return arr.sort((a, b) => b[key] - a[key])[0];
        }
    };
});

module.define('lesson', ['hd'], function(hd){
    let data = [
        {name: 'js', price: 199},
        {name: 'mysql', price: 99},
    ];
    console.log(hd.max(data, 'price'));
});

module.define('a', [], function(){
    return {
        site: '云想衣裳花想容',
        url: 'yxyshxr.com'
    };
});

module.define('b', ['a'], function(a){
    a.site = 'hdcms';
});

module.define('c', ['a'], function(a){
    console.log(a);
});