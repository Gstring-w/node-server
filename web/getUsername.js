const server = require("../server/getUsername");

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
  let params = [];
  server(params, dealData);
}

module.exports = loginWeb;
