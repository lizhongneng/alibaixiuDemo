//处理数据逻辑

const userdb = require('../model/userdb.js')
module.exports = {
    getUsers: (req, res) => {
        userdb.query('SELECT * FROM users', result => {
            console.log(result);
            res.render('users', { result: result })
        })
    }
}