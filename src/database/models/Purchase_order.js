module.exports = function (sequelize, dataTypes) {

  let alias = "PurchaseOrdersTable";

  let cols = {

      id_purchase_order: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      fk_id_user: {
          type: dataTypes.INTEGER,
          foreignKey: true,
          notNull: true
      },
      shipping: {
          type: dataTypes.INTEGER,
          notNull: true
      },
      paymetn_method: {
          type: dataTypes.STRING,
          notNull: true
      }
  };

  let config = {
      tableName: "purchase_orders",
      timestamps: false
  };

  let Purchase_order = sequelize.define(alias, cols, config);

  Purchase_order.associate = function(models) {

    Purchase_order.hasMany(models.CartsTable,{
      as: "Cart",
      foreingKey: "fk_id_order"
    });
  
    Purchase_order.belongsTo(models.UsersTable,{
      as: "User",
      foreingKey: "id_user"
    });
  };
  
  return Purchase_order;
};
