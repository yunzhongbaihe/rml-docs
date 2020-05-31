# 实例
### 1、下载图片
```js
// 1、使用request模块 npm install request
var request = require('request');
var fs = require('fs');
var userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) ' +
                'Chrome/70.0.3538.110 Safari/537.36';
request({
    url: 'https://img.yeitu.com/2017/0701/20170701094130433.jpg?imageslim', // 需要下载的图片地址
    method: "GET",
    encoding: null,
    headers: {
        'Accept-Encoding': 'gzip, deflate',
        'Referer': 'https://www.yeitu.com/',
        'User-Agent': userAgent
    }
}, function(error, response, body){
    if(!error && response.statusCode === 200){
		// 写入图片
        fs.writeFile(`${__dirname}/1.jpg`, body, 'utf-8', function(err){
            console.log('success');
        });
    }
});
```