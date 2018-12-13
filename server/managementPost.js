const queryArgs = require("../dao/dbutils");

function login(params, cb) {
  const sql =
    "SELECT * from postarticle where ORDER BY id DESC LIMIT ?,?";
  queryArgs(sql, params, cb);
}

module.exports = login;
