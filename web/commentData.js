const home = require("../server/commentData");
const Url = require("url");
function loginWeb(req, res) {
  function dealData(error, data) {
    if (error) {
      console.log(error);
    }
    res.send(data);
    res.end();
  }
  let query = Url.parse(req.url).query.split("&");
  let queryValue = {};
  for (var i = 0; i < query.length; i++) {
    queryValue[query[i].split("=")[0]] = query[i].split("=")[1];
  }
  let { page, count, articleId } = queryValue;
  page = Number(page);
  count = Number(count);
  articleId = Number(articleId);
  let params = [articleId, page * count, (page + 1) * count];
  console.log(params);
  home(params, dealData);
}

module.exports = loginWeb;
