const login = require("../server/login");
const md5hash = require("./md5");
function loginWeb(req, res) {
  function dealData(error, data) {
    var header = {
      "Set-Cookie": "user_id=11"
    };
    if (!error) {
      res.set(header);
      res.send(data);
      res.end();
    }
  }

  const { userName, password } = req.body;
  password = md5hash(password);
  let params = [userName, password];
  login(params, dealData);
}

module.exports = loginWeb;
