// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: [], // 滑条海报
    grid: [], // 九宫格
    funcICO: [], //小插件
  },
  
  /* 
    获取服务器数据
  */
  getPosterData(){
    wx.request({
      url: 'http://127.0.0.1:8000/poster',
      method: 'GET',

      success: (res) => {
        console.log('posterData: %s', res.data)
        this.setData({
          poster: res.data
        })
      }
    })
  },

  getGridData(){
    wx.request({
      url: 'http://127.0.0.1:8000/grid',
      method: 'GET',
      success: (res) => {
        console.log('gridData: %s', res.data)
        this.setData({
          grid: res.data
        })
      }
    })
  },

  getFuncICO(){
    wx.request({
      url: 'http://127.0.0.1:8000/function',
      method: "GET",
      success: (res) => {
        console.log('funcICOData: %s', res.data)
        this.setData({
          funcICO: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPosterData()
    this.getGridData()
    this.getFuncICO()
  },
})