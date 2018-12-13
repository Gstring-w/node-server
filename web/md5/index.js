const crypto = require("crypto");
function md5hash(content) {
  var md5 = crypto.createHash("md5");
  md5.update(content);
  return md5.digest("hex");
}
module.exports = md5hash;
