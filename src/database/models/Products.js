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
  return Product;
};
