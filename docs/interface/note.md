# 具体内容
### 1. 登录接口
```md
http://localhost:3000/api/login
登录成功后，更新登录时间
```
### 1.1 请求参数
| 释义 | 参数名 | 类型 | 默认值 |
|-----|-----|-----|-----|
| 用户名称 | username | String |  |
| 登录秘密 | password | String |  |
### 1.2. 返回值
```json
{
    "success": true,
    "msg": "登录成功",
    "data": {
        "username": "admin",
        "loginTime": 1591778591562,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicG",
        "email": "123456789@qq.com"
    }
}
```
### 2. 注册接口
```md
http://localhost:3000/api/register
```
### 2.1 请求参数
| 释义 | 参数名 | 类型 | 默认值 |
|-----|-----|-----|-----|
| 用户名称 | username | String |  |
| 密码 | password | String |  |
| 确认密码 | checkPassword | String |  |
| 邮箱 | email | String |  |
### 2.2. 返回值
```json
{
    "success": true,
    "msg": "注册成功",
    "data": {
        "username": "admin",
        "registerTime": 1591778591562,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicG",
        "email": "123456789@qq.com"
    }
}
```