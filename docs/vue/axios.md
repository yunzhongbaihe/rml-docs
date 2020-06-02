# axios
> Axios是一个基于 `promise` 的 `HTTP` 库，可以用在浏览器和 `node.js` 中
>> 支持浏览器和node.js <br/>
>> 支持promise <br/>
>> 能拦截请求和响应 <br/>
>> 能转换请求和响应数据 <br/>
>> 能取消请求 <br/>
>> 自动转换JSON数据 <br/>
>> 浏览器端支持防止CSRF(跨站请求伪造) <br/>
```sh
yarn add axios
```
### 1、数据请求的进化史
```md
ajax -> axios -> fetch
axios 是基于ajax和promise进行封装的库
fetch 浏览器内置API 进行数据请求的 天生就是基于Promise进行管理的
	fetch([url], [options]);
		options => {body: '', headers: {}}
```
### 2、基于axios实现接口请求库的封装
```md
根据环境变量进行接口区分
设置超时请求时间
设置CORS跨域允许携带资源凭证
设置请求传递数据的格式
设置请求拦截器
设置响应拦截器
	服务器返回信息 => [拦截的统一处理] => 客户端JS获取到信息
	response => {
		data: {},
		status: 200,
		statusText: 'OK',
		headers: {},
		config: {},
		request: {}
	}
```
```js
import axios from 'axios';

// 根据环境变量进行接口区分
switch(process.env.NODE_ENV){
	case 'production':
		axios.defaluts.baseURL = 'http://api.demo.com';
		break;
	case 'test':
		axios.defaluts.baseURL = 'http://test.api.com';
		break;
	default:
		axios.defaluts.baseURL = 'http://localhost:3000';
		break;
};

axios.defaluts.timeout = 10000; // 设置超时请求时间
axios.defaluts.withCredentials = true; // 设置CORS跨域允许携带资源凭证

// 设置请求传递数据的格式
// axios.defaluts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaluts.transformRequest = data => qs.stringify(data);

// 设置请求拦截器
axios.interceptors.request.use(config => {
	let token = localStorage.getItem('token');
	token && (config.headers.Authorization = true);
	return config;
}, error => {
	return Promise.reject(error);
});

/* axios.defaluts.validateStatus = status => {
	return /^(2|3)\d{2}$/.test(status);
}; */

// 设置响应拦截器
axios.interceptors.response.use(response => {
	return response.data;
}, error => {
	lst {response} = error;
	if(response){
		// 服务器返回结果
		switch(response.status){
			case 401: // 权限
				break;
			case 403: // 服务器拒绝执行(token过期)
				break;
			case 404: // 找不到页面
				break;
		}
		return Promise.reject(response.status);
	}else{
		// 服务器未返回结果
		if(!window.navigator.onLine){
			return;
		}
		return Promise.reject(error);
	}
});
```