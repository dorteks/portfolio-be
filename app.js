require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const articleRouter = require("./src/routes/article");
const googleRouter = require("./src/routes/google");

const auth0Middleware = require("./auth/auth0");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

// use auth middlewares at the top of all routes
app.use(auth0Middleware);

app.get("/health-check", (req, res) => {
  res.send("Portfolio backend server is running");
});

app.get("/auth-check", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// other routes
app.use("/", googleRouter);
app.use("/articles", articleRouter);

// catch errors from middleswares
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err.message,
  });
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
