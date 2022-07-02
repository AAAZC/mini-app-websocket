// pages/calculator/calculator.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:0,
    x:0,
    y:0,
    fuhao:"fuhao",
    dengyu:"dengyu"
  },

  number1(){
    if(this.data.x == 0)
    {
      this.setData({
      x: 1,
     })
    } 
    else
    {
      if(this.data.x!=0 & this.data.fuhao=="fuhao")
      {
        this.setData({
         x: this.data.x*10+1,
         })
      }
   }
    if(this.data.fuhao!="fuhao" & this.data.y==0)
    {
      this.setData({
      y:1
    })
  }
    else  
      {
        if(this.data.fuhao!="fuhao" & this.data.y!=0)
        {
          this.setData({
          y: this.data.y*10+1,
         })
      }
    }
},

number2(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 2,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+2,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:2
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+2,
       })
    }
  }
},

number3(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 3,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+3,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:3
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+3,
       })
    }
  }
},
number4(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 4,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+4,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:4
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+4,
       })
    }
  }
},
number5(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 5,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+5,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:5
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+5,
       })
    }
  }
},

number6(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 6,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+6,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:6
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+6,
       })
    }
  }
},

number7(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 7,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+7,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:7
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+7,
       })
    }
  }
},

number8(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 8,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+8,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:8
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+8,
       })
    }
  }
},
number9(){
  if(this.data.x == 0)
  {
    this.setData({
    x: 9,
   })
  } 
  else
  {
    if(this.data.x!=0 & this.data.fuhao=="fuhao")
    {
      this.setData({
       x: this.data.x*10+9,
       })
    }
 }
  if(this.data.fuhao!="fuhao" & this.data.y==0)
  {
    this.setData({
    y:9
  })
}
  else  
    {
      if(this.data.fuhao!="fuhao" & this.data.y!=0)
      {
        this.setData({
        y: this.data.y*10+9,
       })
    }
  }
},

jia(){
  this.setData({
    fuhao:"+"
  })
},
jian(){
  this.setData({
    fuhao:"-"
  })
},
cheng(){
  this.setData({
    fuhao:"*"
  })
},
chu(){
  this.setData({
    fuhao:"/"
  })
},
quyu(){
  this.setData({
    fuhao:"%"
  })
},
setnull(){
  this.setData({
    x:0,
    y:0,
    fuhao:"fuhao",
    dengyu:"dengyu",
    result:0
  })
},
dengyu(){
  if(this.data.fuhao=="+")
  {
    this.data.result=this.data.x+this.data.y
    this.setData({
      result:this.data.x+this.data.y
    })
  }
  if(this.data.fuhao=="-")
  {
    this.data.result=this.data.x-this.data.y
    this.setData({
      result:this.data.x-this.data.y
    })
  }
  if(this.data.fuhao=="*")
  {
    this.data.result=this.data.x*this.data.y
    this.setData({
      result:this.data.x*this.data.y
    })
  }
  if(this.data.fuhao=="/")
  {
    this.data.result=this.data.x/this.data.y
    this.setData({
      result:this.data.x/this.data.y
    })
  }
  if(this.data.fuhao=="%")
  {
    this.data.result=this.data.x%this.data.y
    this.setData({
      result:this.data.x%this.data.y
    })
  }

  console.log(this.data.result)
  
},

ling()
{
  if(this.data.fuhao=="fuhao")
  this.setData({
    x:this.data.x*10
  })
  else
  this.setData({
    y:this.data.y*10
  })
},

lingling(){
  if(this.data.fuhao=="fuhao")
  this.setData({
    x:this.data.x*100
  })
  else
  this.setData({
    y:this.data.y*100
  })
},
shangchu(){
  if(this.data.y!=0)
  {
    this.setData({
    y: (this.data.y-(this.data.y%10))/10 
    })
  }
  else{
    if(this.data.fuhao!="fuhao")
    {
      this.setData({
        fuhao:"fuhao"
      })
    }
    else{
    if(this.data.x!=0)
    {
      this.setData({
        x: (this.data.x-(this.data.x%10))/10 
        })
    }


    }
  }

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