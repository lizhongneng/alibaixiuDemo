//路由处理
const express = require('express')
const usersContr = require('../controller/userContr.js')
const router = express.Router()

router.get('/users', (req, res) => {
    usersContr.getUsers(req, res)
})

module.exports = router