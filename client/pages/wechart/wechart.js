// pages/wechart/wechart.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '', // 客户端输入文本
    message: [], // 服务器返回数据
  },

  /*
  * 数据发送
  */
  // 监听输入数据
  getMsg(e){
    this.setData({
      text: e.detail.value
    })
  },

  // 发送消息
  sendMsg(){
    // 绑定消息
    let info = wx.getStorageSync('userInfo')
    info.msg = this.data.text
    app.globalData.io.send({
      data: JSON.stringify(info),
      success: () => {
        // 消息发送成功后回调为空
        this.setData({
          text: ''
        })
        console.log('消息发送成功')
      },  
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // socket数据监听
    app.globalData.handleMessage((msg) => {
      // msg为server发过来的数据
      console.log('服务端发送:', msg, 'function:handleMessage')

      let data = JSON.parse(msg.data)

      switch (data.type) {
        case 'welcome':
          this.data.message.push(data)
          this.setData({
            message: this.data.message
          })
          break;
        
        default:
          this.data.message.push(data)
          this.setData({
            message: this.data.message
          })
          break;
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面显示时，发送加入群聊者
    let info = wx.getStorageSync('userInfo')
    info.type = "welcome"
    console.log(info)
    app.globalData.welcome(info)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})