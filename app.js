require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");
const articleRouter = require("./src/routes/article");

const app = express();

app.use(bodyParser.json());

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Portfolio backend server is running");
});

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
