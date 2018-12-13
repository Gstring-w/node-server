const queryArgs = require("../dao/dbutils");

function login(params, cb) {
  const sql = "SELECT * FROM user WHERE username=? and password=?";
  queryArgs(sql, params, cb);
}

module.exports = login;
