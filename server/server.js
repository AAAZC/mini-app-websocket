const { json, request, response } = require('express')
let express = require('express')
let websocket = require('ws')

let app = express()

let wss = new websocket.Server({ port: 8800 })

wss.on('connection', (ws) => {
  console.log('socket服务已启动')
  // 接收消息
  ws.on('message', (message) => {
    let data = JSON.parse(Buffer.from(message).toString())

    console.log('接收到数据:', data)

    // 多服务
    switch (data.type) {
      // 发送欢迎信息
      case 'welcome':
        // 广播
        wss.clients.forEach((client) => {
          client.send(JSON.stringify({type: 'welcome', msg: `欢迎${data.username}加入群聊`}))
        })
        break;
    
      default:
        wss.clients.forEach((client) => {
          client.send(JSON.stringify({uid: data.uid, imagePath: data.imagePath, msg: data.msg}))
        })
        break;
    }
    // 将服务器这边接收状态返回客户端，这边默认以发送什么返回什么作为状态
    // ws.send(data)
    // ws.send(message), message为buffer，强制类型转换
    // let data = Buffer.from(message).toString()

    // 考虑到多种数据类型 进行类型转换

  });
})


// 路由
// ------------------------------------------------homepage----------------------------------------------
app.get('/grid', (request, response)=>{
  // 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 设置可预定义响应头(所有标头可接收)
  response.setHeader('Access-Control-Allow-Headers', '*');

  const grid = [
      {"id":1,"name":"外卖","image":"https://cdn3.iconfinder.com/data/icons/set-1-1/70/pop_corn-256.png"},
      {"id":2,"name":"洗浴足疗","image":"https://cdn4.iconfinder.com/data/icons/iconcept-iot/64/bathtub-256.png"},
      {"id":3,"name":"婚纱照","image":"https://cdn1.iconfinder.com/data/icons/wedding-123/64/proposal-engagement-love-marry-wedding-ring-256.png"},
      {"id":4,"name":"卡拉OK","image":"https://cdn3.iconfinder.com/data/icons/vol-4/128/microphone-512.png"},
      {"id":5,"name":"找工作","image":"https://cdn0.iconfinder.com/data/icons/find-a-job-and-interview-filled-outline/512/job_employment_hiring_recruitment_hire_employee_hr_recruit_worker_select-256.png"},
      {"id":6,"name":"旅游","image":"https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/FLIGHT-256.png"},
  ];

  response.send(JSON.stringify(grid))

});

app.get('/poster', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  const poster = [
    {"id":1,"image":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feba7368a696b9729aac7ad355dc250fe850376dd2588b-xl9MJC_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659246758&t=14205771e109a8937c579e7da1720632"},
    {"id":2,"image":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.cndesign.com%2FDesignExchange%2FWorks%2F20180914%2Fbe3c6f36ea1c4da1a3869a0a4134e150.jpeg&refer=http%3A%2F%2Fimg.cndesign.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659246723&t=2c658684588fe8cd52ee3656e2a0ba4a"}
  ]

  response.send(JSON.stringify(poster))
})


app.get('/function', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  const func_ico = [
    {
      "id": 1, 
      name: "轻聊", 
      "path": "/pages/wechart/wechart",
      "image": "https://cdn1.iconfinder.com/data/icons/aami-flat-message-bubbles/64/message-55-256.png"
    },
    {
      "id": 2, 
      name: "画廊", 
      "path": "/pages/gallery/gallery",
      "image": "https://cdn1.iconfinder.com/data/icons/luchesa-2/128/Picture-256.png"
    },
    {
      "id": 3, 
      name: "计算器", 
      "path": "/pages/calculator/calculator",
      "image": "https://cdn3.iconfinder.com/data/icons/computer-applications-2/64/caculator-office-finance-study-school-256.png"}
  ]

  response.send(JSON.stringify(func_ico))
})

// ------------------------------------------------/homepage----------------------------------------------

// ------------------------------------------------shop---------------------------------------------------
app.get('/shopfunc', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  var pageID = String(request.query.pageID)
  var shopFuncICO = []


  switch (pageID) {
    case "1":
      shopFuncICO = [
        {"id": 1, "name": "美团专送", "image": "https://p0.meituan.net/jungle/325483c15c7e9550a43c917510bfcc6612958.png@88w"},
        {"id": 2, "name": "快餐简食", "image": "https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png@88w"},
        {"id": 3, "name": "家常菜",   "image": "https://p1.meituan.net/jungle/4ec8dbe9a2efd9817d6a54f1bfed08ca13971.png@88w"},
        {"id": 4, "name": "图像饮品", "image": "https://p0.meituan.net/jungle/931b4bfa92a37d0f8c42b846f7d7c3b310738.png@88w"},
        {"id": 5, "name": "鲜花蛋糕", "image": "https://p0.meituan.net/jungle/7c3478c6067e37c2b41642f744dc9b8c13342.png@88w"},
      ]
      break;
    
    case "2":
      shopFuncICO = [
        {"id": 1, "name": "美发", "image": "https://cdn3.iconfinder.com/data/icons/beauty-21/64/hair-salon-curl-beauty-256.png"},
        {"id": 2, "name": "美容", "image": "https://cdn1.iconfinder.com/data/icons/beauty-and-cosmetic-line-color-aesthetics/512/skincare-256.png"},
        {"id": 3, "name": "足疗", "image": "https://cdn4.iconfinder.com/data/icons/massage-and-spa-therapy-1/48/16_foot_massage_relaxation_therapy_spa_treatment_wellness-256.png"},
        {"id": 4, "name": "桑拿", "image": "https://cdn3.iconfinder.com/data/icons/interior-homedecor-vol-3/512/basket_shower_shelf_bathroom-256.png"},
        {"id": 5, "name": "按摩", "image": "https://cdn3.iconfinder.com/data/icons/accommodation-ultra-color/60/034_-_Massage-256.png"},
      ]
      break;

    case "3":
      shopFuncICO = [
        {"id": 1, "name": "钻戒", "image": "https://cdn1.iconfinder.com/data/icons/present-4/64/gift-diamon-pesent-special-256.png"},
        {"id": 2, "name": "蛋糕", "image": "https://cdn0.iconfinder.com/data/icons/lovely-valentine-s-day/64/Cake-wedding-gift-present-valentines_ady-marry-256.png"},
        {"id": 3, "name": "婚纱照", "image": "https://cdn0.iconfinder.com/data/icons/family-51/512/marry-me-family-ring-256.png"},
        {"id": 4, "name": "订餐", "image": "https://cdn4.iconfinder.com/data/icons/self-protection-1/512/self_protection_self-_protection-_lunch-food_-healthcare-_medical-covid-19-256.png"},
        {"id": 5, "name": "停车场", "image": "https://cdn3.iconfinder.com/data/icons/transportation-vol-1-18/512/car_parking_sign_lot-256.png"},
      ]
      break;

    case "4":
      shopFuncICO = [
        {"id": 1, "name": "8人大房", "image": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/35-christmas-chorus-song-sing-256.png"},
        {"id": 2, "name": "4人小间", "image": "https://cdn4.iconfinder.com/data/icons/new-year-color-line/64/13-karaoke-256.png"},
        {"id": 3, "name": "酒水饮料", "image": "https://cdn3.iconfinder.com/data/icons/unigrid-flat-food/90/006_143_alchohol_bar_bottles_whiskey_rum_wine-256.png"},
        {"id": 4, "name": "服务", "image": "https://cdn2.iconfinder.com/data/icons/halloween-flat-17/128/trick_treat_halloween_kid_holidays_horror-256.png"},
        {"id": 5, "name": "同伴", "image": "https://cdn1.iconfinder.com/data/icons/weddingweddin/64/FRIEND_WOMAN-companion-friends-hug-girls-256.png"},
      ]
      break;

    case "5":
      shopFuncICO = [
        {"id": 1, "name": "兼职", "image": "https://cdn2.iconfinder.com/data/icons/industry-flat-4/340/foreman_worker_industry_helmet_engineer_industrial_construction_work_architect-256.png"},
        {"id": 2, "name": "公司", "image": "https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/z1-company_corporation_building_institution-256.png"},
        {"id": 3, "name": "找岗位", "image": "https://cdn3.iconfinder.com/data/icons/flat-marketing-set/1024/carrer-256.png"},
        {"id": 4, "name": "热门", "image": "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-256.png"},
        {"id": 5, "name": "实习", "image": "https://cdn4.iconfinder.com/data/icons/designer/128/5-256.png"},
      ]
      break;
  }
  
  response.send(JSON.stringify(shopFuncICO))
})


app.listen(8000, () => {
  console.log('express 启动')
})