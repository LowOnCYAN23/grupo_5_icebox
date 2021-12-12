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
        type: DataTypes.STRING,
      },
      description_product: {
        type: DataTypes.STRING,
      },
      product_image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      fk_id_color: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_category: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_trademark: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_genre: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return Product;
};
