const fs = require("fs");

const config = fs.readFileSync("./server.conf").toString();

let globalConfig = {};

let arr = config.split("\n");

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == "") {
    continue;
  }

  globalConfig[arr[i].split("=")[0]] = arr[i].split("=")[1];
}

module.exports = globalConfig;
