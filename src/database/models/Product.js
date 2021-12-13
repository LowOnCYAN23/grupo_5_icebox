module.exports = function (sequelize,dataTypes) {
  //VARIABLE DE NOMBRE DE TABLA PARA SEQUELIZE
  let alias = "ProductsTable";
  //VARIABLE DE ATRIBUTOS CON SUS PROPIEDADES PARA CADA COLUMNA A USAR EN EL PROYECTO
  let cols = {

      id_product: {
          type:dataTypes.INTEGER,
          primaryKey: true,
          notNull: true,
          uniqueIndex: true,
          autoIncrement: true
      },

      name_product: {
          type:dataTypes.STRING,
          notNull: true,
      },

      description_product: {
          type:dataTypes.STRING,
          notNull: true,
      },

      product_image: {
          type:dataTypes.STRING,
          notNull: true,
      },

      price: {
          type:dataTypes.DECIMAL,
          notNull: true,
      },

      fk_color: {
          type:dataTypes.INTEGER
      },

      fk_category: {
          type:dataTypes.INTEGER
      },

      fk_mark: {
          type:dataTypes.INTEGER
      },

      fk_genre: {
          type:dataTypes.INTEGER
      }
  };
  //VARIABLE DE CONFIGURACIÓN (timestamps sirve para registro de fecha de creación y otra fecha de editado)
  let config = {

      tableName: "products",//nombre en la db de mysql
      timestamps: false

  };
  
  let Product = sequelize.define(alias, cols, config);

  Product.associate = function(models) {
    Product.hasMany(models.CartTable,{
      as: "Cart",
      foreingKey: "fk_id_product"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.CategoriesTable,{
      as: "Category",
      foreingKey: "id_category"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.ColorsTable,{
      as: "Color",
      foreingKey: "id_color"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.GenresTable,{
      as: "Genre",
      foreingKey: "id_genre"
    });
  };
  Product.associate = function(models) {
    Product.belongsTo(models.TrademarksTable,{
      as: "Trademark",
      foreingKey: "id_trademark"
    });
  };
  return Product;
};