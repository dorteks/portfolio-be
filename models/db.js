const { Sequelize, DataTypes } = require("sequelize");
const CONFIG = require("../config/db-config");
const articleModel = require("./article-model");

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USERNAME,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// set up db
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// add all models to db model
// e.g db.Model = ModelName(sequelize, DataTypes)
db.article = articleModel(sequelize, DataTypes);

// sync models with database
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database has been synced successfully.");
  })
  .catch((error) => {
    console.error("Unable to sync with the database:", error);
  });

module.exports = db;
