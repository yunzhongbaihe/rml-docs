---
sidebar: false
# 重置代码块为text的显示样式
textcodeRestStyle: true
---
```text
面试时间：2020/06/17 10:00
面试地点：公主坟站国海广场1号楼二层 中软国际
面试问题：
	1、cookie/sessionStorage/localStorage的区别
		共同点：都保存在浏览器端，并且是同源的
		不同点：
			传递方式：
				cookie始终在http请求中，在浏览器和服务器来回传递
				sessionStorage和localStorage只存在本地，不发送服务器
			数据大小：
				cookie有路径概念，只存在某个路径下，不超过4k
				sessionStorage和localStorage可以达到5M
			数据有效期：
				cookie只在设置的过期时间之前一直有效，即使窗口或浏览器关闭
				sessionStorage是会话级别的，仅在当前浏览器窗口关闭前有效
				localStorage始终有效，用作持久化存储
			作用域：
				cookie也是在所有同源窗口中都是共享的
				sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面
				localStorage在所有同源窗口中都是共享的
	
	2、vue与react和angular的区别
		与AngularJS的区别
			都支持内置、自定义指令
			都支持内置、自定义过滤器
			都支持双向数据绑定
			AngularJS依赖对数据做脏检查
		与React的区别
			React是单向数据流
			
	3、如何使axios进行同步请求
		可以使用ES7的异步特性async/await
		async修饰的异步方法，需要等待await修饰的语句执行完毕
		
	4、vuex中常用的有
		state
		getters 在组件中 computed 属性里使用 ...mapGetters() 进行映射
		actions 通过 dispatch 触发 是异步 在组件中 methods 属性里使用 ...mapActions() 进行映射
		mutations 通过 commit 触发 是同步 在组件中 methods 属性里使用 ...mapMutations() 进行映射
	
	5、在移动端中页面切换如何保持状态
	
	6、关于移动端的文本框获取焦点时导致定位的按钮被手机键盘顶上去的问题
		动态监控浏览器窗口的变化
		当浏览器窗口的大小发生变化时
		如果变化后的窗口高度小于初始的窗口高度则让按钮隐藏起来
		反之，则让按钮正常显示
		
	7、nginx如何部署dist目录
	
	8、vue中computed与watch的区别
		computed中依赖的数据进行改变后，会重新进行计算
		watch可以监听一个数据变化，去影响多个数据
	
	9、http与https的区别
		数据加密传输，是HTTP和HTTPS之间的本质性区别
		访问HTTP网站的时候，会显示“不安全”字样的安全警告
		搜索排名的提升，HTTPS网站比起HTTP网站在搜索排名中更有优势
```