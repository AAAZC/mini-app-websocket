// pages/gallery/gallery.js
Page({
  data: {
    meishitu:[{
      pic:"https://img.meituan.net/600.600/msmerchant/3b39d5d539c904a76139311a77c9261e435542.jpg@220w_125h_1e_1c",
      title:"泰国海鲜火锅"
    },],
    picture:[],
    showShare:false,
  },

  shareClose(){
    this.setData({showShare:false})
  },
  
  toDetail:function(e){
    console.log(e.target.dataset.id);
    wx.navigateTo({
      url: '../detail/detail?id1='+e.target.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  choosePic:function(){
    wx.chooseImage({
      success:(res)=>{
        console.log(res.tempFilePaths[0]);
        var temp = this.data.picture;
        temp.push(res.tempFilePaths[0])
        this.setData({
          picture:temp
        })
        console.log(this.data.picture);
      }
    })
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