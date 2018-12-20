const globalConfig = require("./globalConfig");
const allowCrossDomain = require("./accessControl");
const loginWeb = require("./web/login");
const commentData = require("./web/commentData");
const homeArticle = require("./web/homeArticle");
const managementPost = require("./web/managementPost");
const getUser = require("./web/getUsername");
const filter = require("./filter");

const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const expressJwt = require("express-jwt");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(cookie());
app.use(allowCrossDomain);

//拦截器
app.use(
  expressJwt({
    secret: "guan_blog"
  }).unless({
    path: ["/api/login", "/api/home/articles"]
  })
);
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});

// 接口
// 登录接口
app.post("/api/login", loginWeb); // http://localhost:12306/api/login

app.get("/api/comment", commentData); // 评论接口 http://localhost:12306/api/comment?page=0&count=1&articleId=1
app.get("/api/home/articles", homeArticle); //首页文章接口 http://localhost:12306/api/home/articles?page=0&count=1
app.get("/api/management/post", managementPost); //获取将要发布文章的接口 http://localhost:12306/api/management/post?page=0&count=1

app.get("/api/username", getUser); // 获取注册过的用户 http://localhost:12306/api/username
app.listen(globalConfig["server_port"], () =>
  console.log("server run at http://localhost:" + globalConfig["server_port"])
);
