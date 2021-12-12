module.exports = function (sequelize, dataTypes) {

  let alias = "CategoriesTable";

  let cols = {

      id_category: {
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
      tableName: "category",
      timestamps: false
  };

  let Category = sequelize.define(alias, cols, config);

  Category.associate = function(models) {
    Category.hasMany(models.ProductsTable,{
      as: "Product",
      foreingKey: "fk_id_category"
    });
  };
  return Category;
};
