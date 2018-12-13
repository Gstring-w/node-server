const login = require("../server/login");
const md5hash = require("./md5");
const token = require("./JWT");
function loginWeb(req, res) {
  function dealData(error, data) {
    if (!error) {
      if (data.length != 0) {
        // var header = {
        //   "Set-Cookie": `user_id=${token(data[0].username)}`
        // };
        // res.set(header);
        // res.send(data);
        res.json({
          token: token(data[0].username)
        });
        res.end();
      } else {
        res.send("password error");
        res.end();
      }
    }
  }
  //test username:root password:123

  const { username, password } = req.body;
  let params = [username, md5hash(password)];
  login(params, dealData);
}

module.exports = loginWeb;
