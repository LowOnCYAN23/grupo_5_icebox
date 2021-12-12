module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define(
    'Purchase_order',
    {
      id_purchase_order: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_id_user: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      shipping: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      payment_method: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  Purchase_order.associate = function(models) {
    Purchase_order.hasMany(models.Cart,{
      as: "Cart",
      foreingKey: "fk_id_order"
    });
  };
  return Purchase_order;
};
