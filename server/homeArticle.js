const queryArgs = require("../dao/dbutils");

function login(params, cb) {
  const sql = "SELECT * from article where LIMIT (?,?) ";
  queryArgs(sql, params, cb);
}

module.exports = login;
