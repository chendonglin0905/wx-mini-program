// index.js
Page({
  data: {
    swiperList: [
      "https://img1.baidu.com/it/u=4075744070,664465068&fm=253&fmt=auto&app=138&f=PNG?w=1600&h=500",
      "https://img0.baidu.com/it/u=4048174728,1217903283&fm=253&fmt=auto&app=138&f=JPEG?w=996&h=500","https://img2.baidu.com/it/u=2640374108,3747286767&fm=253&fmt=auto&app=138&f=GIF?w=1112&h=500"
    ],
    middleContent:[{
    "iconPath":"/img/index.png",
     "text":"测试" 
    },{
      "iconPath":"/img/index.png",
       "text":"测试" 
      },{"iconPath":"/img/index.png",
         "text":"测试"   
        },{
          "iconPath":"/img/index.png",
           "text":"测试" 
          },{
            "iconPath":"/img/index.png",
             "text":"测试" 
            },{
              "iconPath":"/img/index.png",
               "text":"测试" 
              },{
                "iconPath":"/img/index.png",
                 "text":"测试" 
                },{
                  "iconPath":"/img/index.png",
                   "text":"测试" 
                  },{
                    "iconPath":"/img/index.png",
                     "text":"测试" 
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