// index.js
Page({
  data :{
    value:"test", 
  },
  click(e){
    this.setData({
      value:"test4343"
    })
    
  },
  printValue(e){
    console.log(e.detail.value)
  }
})
