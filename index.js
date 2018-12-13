const globalConfig = require("./globalConfig");
const allowCrossDomain = require("./accessControl");
const loginWeb = require("./web/login");
const commentData = require("./web/commentData");
const homeArticle = require("./web/homeArticle");
const managementPost = require("./web/managementPost");
const getUser = require("./web/getUsername");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(allowCrossDomain);

app.get("/", (req, res) => {
  res.write("111");
  res.end();
});
// 接口
// 登录接口
app.post("/login", loginWeb);

app.get("/comment", commentData); // 评论接口 http://localhost:12306/comment?page=0&count=1&articleId=1
app.get("/home/articles", homeArticle); //首页文章接口 http://localhost:12306/home/articles?page=0&count=1
app.get("/management/post", managementPost); //获取将要发布文章的接口 http://localhost:12306/management/post?page=0&count=1

app.get("/username", getUser); // 获取注册过的用户 http://localhost:12306/username 
app.listen(globalConfig["server_port"], () =>
  console.log("server run at http://localhost:" + globalConfig["server_port"])
);
