//处理数据逻辑

const userdb = require('../model/userdb.js')
module.exports = {
    getUsers: (req, res) => {
        userdb.query('SELECT * FROM users', (err,result) => {
            res.render('users', { result: result })
        })
    },
    addUser: (req, res) => {
        //先接收用户参数
        let params = req.body        
        //拼接参数
        let addSql = `INSERT INTO users (slug, email, password, nickname, status) VALUES ('${params.slug}','${params.email}','${params.password}','${params.nickname}','activated')`
        //插入数据库
        userdb.query(addSql, (err, result) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: '新增用户失败'
                })
            }
            res.send({
                status: 200,
                msg: '新增用户成功'
            })
        })
    },
    getAllUsers: (req, res) => {
        userdb.query('SELECT * FROM users', (err, result) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: "用户数据获取失败"
                })
            }
            res.send({
                status: 200,
                msg: "用户数据获取成功",
                data:result //[{},{},{}...]
            })
        })
    },
    delUser:(req,res)=>{
        let id = req.query.id
        let sql = `DELETE FROM users WHERE id = ${id}`
        userdb.query(sql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'删除失败'
                })
            }
            res.send({
                status:200,
                msg:"删除成功"
            })
        })
    },
    getUserById:(req,res)=>{
        let id = req.query.id
        let sql = `SELECT * FROM users WHERE id = ${id}`
        userdb.query(sql,(err,result)=>{          
            if (err) {
                return res.send({
                    status:400,
                    msg:'查询失败'
                })
            }
            res.send({          
                status:200,
                msh:"查询成功",
                data:result[0]
            })
        })
    },
    editUser:(req,res)=>{
        let params = req.body  
        let sql = `UPDATE users SET email='${params.email}', nickname='${params.nickname}', password='${params.password}' WHERE id=${params.id}`
        userdb.query(sql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'修改失败'
                })
            }
            res.send({
                status:200,
                msg:"修改成功"
            })
        })
    },
    delUsersByIds:(req,res)=>{
        let ids =req.body.id
        console.log(ids);
        //将数组转为字符串
        let idStr = ids.join(',')
        let sql = `DELETE FROM users WHERE id in (${idStr})`
        userdb.query(sql,(err,result)=>{
            if (err) {
                return res.send({
                    status:400,
                    msg:'删除失败'
                })
            }
            res.send({
                status:200,
                msg:"删除成功"
            })
        })
        
    }
}