const db = require("../../models/db");

const articleModel = db.article;

const getArticle = async (req, res) => {
  try {
    const articles = await articleModel.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send({
      message: "An error occured",
    });
  }
};

const createArticle = async (req, res) => {
  const newArticle = req.body;

  try {
    const article = await articleModel.create(newArticle);
    // const articles = await articleModel.findAll(articles);

    console.log(article, "new article added");

    res.status(201).json({
      message: "Article added successfully",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occured",
      data: error.message,
    });
  }
};

const getArticleById = async (req, res) => {
  const articleId = req.params.id;

  try {
    const article = await articleModel.findOne({
      where: {
        id: articleId,
      },
    });
    res.status(200).json({
      message: "Success",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occured",
      data: error.message,
    });
  }
};

const updateArticle = async (req, res) => {
  const articleId = req.params.id;
  const updateArticle = req.body;

  try {
    const article = await articleModel.update(updateArticle, {
      where: {
        id: articleId,
      },
    });
    res.status(200).json({
      message: "Article updated successfully",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occured",
      data: error.message,
    });
  }
};

const deleteArticle = async (req, res) => {
  const articleId = req.params.id;

  try {
    await articleModel.destroy({ where: { id: articleId } });
    res.status(200).send({
      message: "Article deleted successfully",
      data: "",
    });
  } catch (error) {
    res.status(500).send({
      message: "An error occured",
      data: error.message,
    });
  }
};

module.exports = {
  getArticle,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
