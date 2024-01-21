const express = require("express");
const articleController = require("../controllers/article-controller");

const articleRouter = express.Router();

articleRouter.get("/", articleController.getArticle);
articleRouter.post("/", articleController.createArticle);
articleRouter.get("/:id", articleController.getArticleById);
articleRouter.put("/:id", articleController.updateArticle);
articleRouter.delete("/:id", articleController.deleteArticle);

module.exports = articleRouter;
