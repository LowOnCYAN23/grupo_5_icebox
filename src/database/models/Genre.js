module.exports = function (sequelize, dataTypes) {

  let alias = "GenresTable";

  let cols = {

      id_genre: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      name: {
          type: dataTypes.STRING,
          notNull: true
      }
  };

  let config = {
      tableName: "genres",
      timestamps: false
  };

  let Genre = sequelize.define(alias, cols, config);

  Genre.associate = function(models) {
    Genre.belongsTo(models.ProductsTable,{
      as: "Product",
      foreingKey: "fk_genre"
    });
  };

  return Genre;
};
