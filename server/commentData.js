const queryArgs = require("../dao/dbutils");

function login(params, cb) {
  const sql = "SELECT * from comment where comment.articleId=? Limit ?,?";
  queryArgs(sql, params, cb);
}

module.exports = login;
