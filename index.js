const Http = require("http");
const Url = require("url");
const GlobalConfig = require("./globalConfig/index");

Http.createServer(function(req, res) {
    
  req.on("data", function(err, data) {
      
    res.write("1111");
    res.end();
  });
}).listen(GlobalConfig["server_port"]);
