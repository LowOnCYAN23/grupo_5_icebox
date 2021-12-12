module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      id_cart: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_user: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_product: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_order: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {
      tableName: 'Shopping Cart',
      timestamps: false,
    }
  );
  return Cart;
};
