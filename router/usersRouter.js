//路由处理
const express = require('express')
const usersContr = require('../controller/userContr.js')
const router = express.Router()

router.get('/users', usersContr.getUsers)//处理user页面
      .post('/addUser',usersContr.addUser)//新增用户
      .get('/getAllUsers',usersContr.getAllUsers)//获取所有用户
      .get('/delUser',usersContr.delUser)//删除用户
      .get('/getUserById',usersContr.getUserById)//编辑用户
      .post('/editUser',usersContr.editUser)//修改用户
      .post('/delUsersByIds',usersContr.delUsersByIds)//批量删除
module.exports = router