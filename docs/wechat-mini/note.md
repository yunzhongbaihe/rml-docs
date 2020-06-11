# 基础用法
### 1、简介
```md
微信小程序
```
### 2、index.json
```javascript
Page({
    data: {
        todos: ['1', '2', '3'],
        msg: 'Wechat Mini Program'
    },
    handleInput(e){
        this.setData({
            msg: e.detail.value,
        });
    },
    addTodo(){
        this.setData({
            msg: '',
            todos: [...this.data.todos, this.data.msg],
        });
    },
    takePhoto(){
        const ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath,
                });
            }
        });
    }
});
```
### 3、index.wxml
```html
<view class="container">
	<view class="title-text">{{msg}}</view>
    <view wx:for="{{todos}}">{{item}}</view>
    <input value="{{msg}}" bindinput="handleInput" placeholder="请输入清单名称"></input>
    <button bindtap="addTodo">添加</button>
	<camera class="camera"
            mode="normal"
            device-position="back"
            flash="off"
            style="width:100%;height:300px;">
	</camera>
	<button type="primary" bindtap="takePhoto">拍照</button>
</view>
```