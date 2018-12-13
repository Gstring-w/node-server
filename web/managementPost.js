const server = require("../server/homeArticle");
const Url = require("url");

function postArticles(req, res) {
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
  let params = [page * count, (page + 1) * count];
  server(params, dealData);
}

module.exports = postArticles;
