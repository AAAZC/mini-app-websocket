/*
  关于wechart
*/
// 引入tcpsocket
let io = wx.connectSocket({
  url: 'ws://127.0.0.1:8800' 
})

let userInfo = {
  uid: 0,
  username: '中须霞',
  imagePath: '../../images/userInfo/小霞霞.png'
}

wx.setStorage({
  key: "userInfo",
  data: userInfo
})

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    io,
    // 数据回调
    handleMessage(callback){
      io.onMessage((msg) => {
        callback(msg)
      })
    },
    // 将用户加入群聊发送到服务器端进行广播
    welcome(userInfo){
      // 监控socket是否开启
      wx.onSocketOpen(() => {
        io.send({
          data: JSON.stringify(userInfo),
          success: () => {
            console.log('已加入群聊')
          },
          fail: (e) => {
            console.log(e)
          }
        })
      })
    }
  }
})
