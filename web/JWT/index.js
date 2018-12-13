const jwt = require("jsonwebtoken");
const secret = "guan_blog";

function token(name) {
  return jwt.sign({ name: name }, secret, { expiresIn: 60 * 60 * 12 });
}
module.exports = token;
