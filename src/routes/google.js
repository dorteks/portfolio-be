const express = require("express");
const { requiresAuth } = require("express-openid-connect");

const googleRouter = express.Router();

googleRouter.get("/", (req, res) => {
  res.render("index", {
    user: req.oidc.user,
  });
});

googleRouter.get("/profile", requiresAuth(), (req, res) => {
  console.log(req.oidc.user);
  res.render("profile", {
    user: req.oidc.user,
  });
});

module.exports = googleRouter;
