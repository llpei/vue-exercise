//引入 exporess body-parser
const express = require('express')
const bodyParser = require('body-parser')
//定义Express APP
const app = express()
const router = express.Router()
//设置消息处理格式 json
app.use(bodyParser.json())
//设定response的头信息
app.use((request,response,next) => {
    //解决跨域访问的问题
    response.header("Access-Control-Allow-Origin","*")
    response.header("Access-Control-Allow-Headers","Content-Type")
    response.header("Access-Control-Allow-Methods","*")
    next()
  }
)
//设置后台数据
let count = [1,2,3]
//设置路由，添加路由方法 get获取数据  post添加数据  delete删除数据
router.route('/count')
  .get((request,response) => {
    response.send({
      count
    })
  })
  .post((request,response) => {
    count.push(Number(request.body.number))
    //返回状态码以及发送回传消息
    response.status(201).send({
      message:'ok'
    })
  })
  .delete((request,response) => {
    count.pop()
    response.status(200).send({
      message:'ok'
    })
  })
//使用API，并添加前缀
app.use('/api',router)
//监听端口，打印出访问地址
app.listen(8080,() => {
  console.log('http://localhost:8080')
})
