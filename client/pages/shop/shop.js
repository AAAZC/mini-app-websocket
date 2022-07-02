// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageInfo: {}, // 接收homepage参数
    shopList: [], // 商品列表
    page: 1, // 当前页码
    pageCount: 10, // 每页10条数据
    total: 0, // 总数

    isloading: false,

    // 功能栏图标
    funcICO: [],
  },

  // 获取商品小功能的ICO
  getShopFuncICO(){
    wx.request({
      url: 'http://127.0.0.1:8000/shopfunc',
      method: "GET",
      data: {
        pageID: this.data.pageInfo.id
      },
      success: (res) => {
        this.setData({
          funcICO: res.data
        })
      }
    })
  },

  /* 获取商品清单 */
  getShopList(state){
    // loading
    this.setData({
      isloading: true
    })

    wx.showLoading({
      title: '加载中',
    })

    // 请求
    wx.request({
      url: `https://escook.cn/categories/${this.data.pageInfo.id}/shops`,
      method: 'GET',
      data:{
        _page: this.data.page,
        _limite: this.data.pageCount,
      },
      success: (res) => {
        console.log(res)
        // this.data.shopList.push(res.data)
        /*
          push output:
            data[][]
        */
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: res.header['X-Total-Count'] - 0,
        })
      },
      complete: () => {
        wx.hideLoading({})

        this.setData({
          isloading: false
        })
        
        // wx.stopPullDownRefresh()

        state&&state()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      pageInfo: options,
      funcICO: []
    }),
    this.getShopFuncICO()
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.pageInfo.name,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 刷新data
    this.setData({
      shopList: [],
      page: 1,
      pageCount: 10,
      total: 0,
    }),

    // 重新获取数据
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(!this.data.isloading){
      if(this.data.total >= this.data.page * this.data.pageCount){
        this.setData({
          page: this.data.page + 1
        }),
        this.getShopList()
      }else{
        wx.showToast({
          title: '已经到底啦!',
          icon: 'none'
        })
      }
    }
  },
})