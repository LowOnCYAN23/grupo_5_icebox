module.exports = function (sequelize, dataTypes) {

  let alias = "CartTable";

  let cols = {

      id_cart: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          notNull: true
      },
      fk_id_user: {
          type: dataTypes.INTEGER,
          notNull: true
      },
      fk_id_product: {
          type: dataTypes.INTEGER,
          notNull: true

      },
      fk_id_order: {
          type: dataTypes.INTEGER,
          notNull: true
      },
      cant: {
          type: dataTypes.INTEGER,
          notNull: true
      }

  };

  let config = {

      tableName: "cart",//nombre en la db de mysql
      timestamps: false

  };
  
  let Cart = sequelize.define(alias, cols, config);

  Cart.associate = function (models) {
      
      Cart.belongsTo(models.UsersTable,{
        as: "User",
        foreingKey: "fk_id_user"
      });

      Cart.belongsTo(models.ProductsTable,{
        as: "Product",
        foreingKey: "fk_id_product"
      });

      Cart.hasMany(models.PurchaseOrdersTable,{
        as: "PurchaseOrder",
        foreingKey: "fk_id_purchase_order"
      });
  };

  return Cart;
};