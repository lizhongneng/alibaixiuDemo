//封装执行数据库操作
const mysql = require('mysql')

exports.query = (sql, callback) => {
    //创建一个链接对象const
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'baixiu'
    })
    //用户连接
    connection.connect()
    //执行sql语句
    connection.query(sql, (err,result) => {
        if (err) {
            return callback(err,null)
        }
        callback(null,result)
    })
    connection.end()
}