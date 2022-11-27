const express = require("express");
const artcileRoute = express.Router();
const {
  getArticle,
  postArticle,
  putArticle,
  deleteArticle,
} = require("../Controllers/artcileController");

artcileRoute.get("/artcile", getArticle);
artcileRoute.get("/artcile", postArticle);
artcileRoute.get("/artcile/:id", putArticle);
artcileRoute.get("/artcile/:id", deleteArticle);

module.exports = artcileRoute;
