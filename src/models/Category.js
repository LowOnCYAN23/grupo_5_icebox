module.exports = function (sequelize, dataTypes) {
  let alias = 'CategoryTable';

  let cols = {
    id_category: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    name: {
      type: dataTypes.STRING,
      notNull: true,
    },
  };

  let config = {
    tableName: 'categories',
    timestamps: false,
  };

  let Category = sequelize.define(alias, cols, config);

  Category.associate = function (models) {
    Category.hasMany(models.ProductsTable);
  };
  return Category;
};
