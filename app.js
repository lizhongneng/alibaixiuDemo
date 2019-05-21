const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./router/usersRouter')

const app = express()
const port = 4000

// 配置 ejs 模板引擎
app.set('views', './views') // 设置模板引擎的静态页面
app.set('view engine', 'ejs') // 设置渲染模板使用的引擎

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//静态页面处理{如果你的请求中带有前缀，那么配置中要写上。如果请求中没有，那配置中不要写}
app.use('/assets',express.static('./assets'))
app.use('/static/uploads',express.static('./uploads'))

app.use(usersRouter)
app.listen(port, () => console.log(`Demo运行端口：4000`))