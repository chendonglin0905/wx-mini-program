// index.js
Page({
  data: {
    swiperList: [
      "https://img0.baidu.com/it/u=2079356806,76935826&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=260",
      "https://img1.baidu.com/it/u=2217702911,1536797179&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=500", "https://img2.baidu.com/it/u=3948194614,644501665&fm=253&fmt=auto&app=138&f=JPEG?w=1373&h=500"
    ],
    middleContent: [{
       "iconPath": "/img/news.png",
      "text": "新闻"
    }, {
      "iconPath": "/img/yule.png",
      "text": "娱乐"
    }, {
      "iconPath": "/img/sports.png",
      "text": "体育"
    }, {
      "iconPath": "/img/meishi.png",
      "text": "美食"
    }, {
      "iconPath": "/img/xiju.png",
      "text": "喜剧"
    }, {
      "iconPath": "/img/life.png",
      "text": "生活"
    }, {
      "iconPath": "/img/love.png",
      "text": "恋爱"
    }, {
      "iconPath": "/img/zhuiju.png",
      "text": "追剧"
    }, {
      "iconPath": "/img/game.png",
      "text": "游戏"
    }]
  },
  click(e) {
    this.setData({
      value: "test4343"
    })

  },
  printValue(e) {
    console.log(e.detail.value)
  }
})