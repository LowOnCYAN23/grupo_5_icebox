const Product = require("./Product");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      id_product: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name_product: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description_product: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      fk_id_color: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_category: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_trademark: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_genre: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  Product.associate = function(models) {
    Product.hasMany(models.Cart,{
      as: "Cart",
      foreingKey: "fk_id_product"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.Category,{
      as: "Category",
      foreingKey: "id_category"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.Color,{
      as: "Color",
      foreingKey: "id_color"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.Genre,{
      as: "Genre",
      foreingKey: "id_genre"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.Trademark,{
      as: "Trademark",
      foreingKey: "id_trademark"
    });
  };
  return Product;
};
