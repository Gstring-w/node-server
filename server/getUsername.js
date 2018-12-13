const queryArgs = require("../dao/dbutils");

function login(params, cb) {
  const sql = "SELECT user.username FROM user";
  queryArgs(sql, params, cb);
}

module.exports = login;
