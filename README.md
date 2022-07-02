# webSocket兼容小程序开发

讲webSocket兼容小程序开发是因为这部分时我学到的小东西，自己在开发时遇到了很多很多困难，现在先写出来给大家做个演示，整个websocket的应用在主页里的 “轻聊” 里面，自己调试即可

## 服务器

### 环境

```
npm init // package.json

// 下载需要的包
npm i nodemon
npm i ws -s
npm i express -s
```

### 搭建服务器

基本格式如下，按照ws官方文档分为启动服务和发送数据两部分

```js
let express = require('express')
let websocket = require('ws')

let app = express()

let wss = new websocket.Server({ port: 8000 })

wss.on('connection', (ws) => {
  console.log('socket服务已启动')
  // 接收消息
  ws.on('message', (message) => {
    console.log('接收到: %s', message);
  });

  // 发送消息
  ws.send('嗨嗨');
})


app.listen(3000, () => {
  console.log('express 启动')
})
```



## 客户端

### UI

UI设计为如下

<img src="C:\Users\huawei\AppData\Roaming\Typora\typora-user-images\image-20220629214606575.png" alt="image-20220629214606575" style="zoom:50%;" />

```html
<view class="container">
  <scroll-view class="list" scroll-y style="height:1400rpx">
    <view class="item" wx:for="{{15}}" wx:key="item">
        <image src="../../public/img/avatar.jpg" />
        <view>这是一条消息</view>
    </view>
  </scroll-view>
</view>

<view class="input">
  <view class="content">
    <input type="text" value="{{text}}" bindinput="getMsg" placeholder="在这里输入消息..." />
    <view bindtap="sendMsg">发送</view>
  </view>
</view>
```

```css
page {
  background: #ccc;
}

.container {
  margin: 0 30rpx;
}

.input {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70rpx;
  background: #fff;
}

.input .content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
}

.input .content input {
  width: 90%;
}

.input .content view {
  font-size: 14px;
}

.list .item:first-child {
  margin-top: 16rpx;
}

.list .item {
  display: flex;
  align-items: center;
  margin-bottom: 30rpx;
}

.list .item image {
  width: 95rpx;
  height: 95rpx;
  border-radius: 50%;
  margin-right: 15rpx;
}

.list .item .chat {
  display: flex;
}

.list .item .chat>view {
  background: #fff;
  padding: 25rpx 40rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
}

.list .item .welcome {
  width: 100%;
  display: flex;
  justify-content: center;
}

.list .item .welcome view {
  background: rgb(255, 255, 255);
  padding:  10rpx 20rpx;
  border-radius: 16rpx;
  color: #000;
  font-size: 14px;
}
```



### API

查阅开发手册[SocketTask.send(Object object) | 微信开放文档 (qq.com)](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html)，为开发方便，将下述方法放入app.js作为全局对象

主要涉及的API：

+  wx.connectSocket 连接ws，它后续一切操作的前提
+  onMessage ws数据监听，就是监听ws服务器发过来的数据，显而易见用于获取对面的人发来的消息

```js
// app.js
let io = wx.connectSocket({
  url: 'ws://127.0.0.1:8000' 
})

globalData: {
    userInfo: null,
    io,
    // 数据回调
    handleMessage(callback){
      io.onMessage((msg) => {
        callback(msg)
      })
    },
}
```

### *.js

针对*.js的开发，主要解决一下问题：

+ 用户输入
+ 消息发送到服务器
+ 客户端接收服务器数据



1、用户输入：bindinput监听

```js
// 监听输入数据
  getMsg(e){
    console.log(e.detail.value)
    this.setData({
      text: e.detail.value
    })
  },
```

2、数据发送到服务器：调用APISocketTask.send(Object object) 

```js
const app = getApp()

 // 发送消息
sendMsg(){
    app.globalData.io.send({
        data: this.data.text,
        success: () => {
            // 消息发送成功后回调为空
            this.setData({
                text: ''
            })
            console.log('消息发送成功')
        }
    })
},
```

3、客户端接收服务器数据

是否还记得API阶段定义的 handleMessage(callback) 主要用于接收服务器的响应，当然是要放到onload中进行监听

```js
/**
* 生命周期函数--监听页面加载
*/
onLoad(options) {
    // socket数据监听
    app.globalData.handleMessage((msg) => {
        // 这个msg就是server发过来的数据
        console.log(msg)

        this.data.message.push(msg.data)
        this.setData({
            message: this.data.message
        })
    })
    // console.log(app.globalData.handleMessage)
},
```

总体

```js
const app = getApp()

// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '', // 客户端输入文本
  },

  /*
  * 数据发送
  */
  // 监听输入数据
  getMsg(e){
    console.log(e.detail.value)
    this.setData({
      text: e.detail.value
    })
  },

  // 发送消息
  sendMsg(){
    app.globalData.io.send({
      data: this.data.text,
      success: () => {
        // 消息发送成功后回调为空
        this.setData({
          text: ''
        })
        console.log('消息发送成功')
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // socket数据监听
    app.globalData.handleMessage((msg) => {
      // 这个msg就是server发过来的数据
      console.log(msg)

      this.data.message.push(msg.data)
      this.setData({
        message: this.data.message
      })
    })
    // console.log(app.globalData.handleMessage)
  },
})
```

***完成上述步骤之后，会得到一个可以发送请求和接收响应的样例，但是这仅仅是“自己和自己讲话” ，因为我们的数据只展现在我们这个账号对应的客户端上，别的账号并不会收到数据，读者可以通过	工具-多人测试 	进行测试***
