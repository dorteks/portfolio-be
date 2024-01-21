module.exports = (sequelize, DataTypes) => {
  const ArticleModel = sequelize.define(
    "Article",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(75),
        allowNull: false,
      },
      metaTitle: {
        type: DataTypes.STRING(100),
      },
      slug: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      summary: {
        type: DataTypes.TEXT,
      },
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      publishedAt: {
        type: DataTypes.DATE,
        // defaultValue: "2024-01-01T00:00:00.000Z",
      },
      content: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "article",
    }
  );

  return ArticleModel;
};
