const mysql = require("mysql");
const configMysql = require("./mysqlConfig");
const pool = mysql.createPool(configMysql);

function queryArgs(sql, args, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.log("mysql创建连接失败");
    }
    connection.query(sql, args, function(err, result) {
      callback(err, result);
      connection.release();
    });
  });
}
module.exports = queryArgs;
