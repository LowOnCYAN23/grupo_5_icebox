module.exports = function (sequelize, dataTypes) {
  //VARIABLE DE NOMBRE DE TABLA PARA SEQUELIZE
  const alias = 'ProductsTable';
  //VARIABLE DE ATRIBUTOS CON SUS PROPIEDADES PARA CADA COLUMNA A USAR EN EL PROYECTO
  const cols = {
    id_product: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      uniqueIndex: true,
      autoIncrement: true,
    },

    name_product: {
      type: dataTypes.STRING,
      notNull: true,
    },

    description_product: {
      type: dataTypes.STRING,
      notNull: true,
    },

    product_image: {
      type: dataTypes.STRING,
      notNull: true,
    },

    price: {
      type: dataTypes.DECIMAL,
      notNull: true,
    },

    fk_color: {
      type: dataTypes.INTEGER,
    },

    fk_category: {
      type: dataTypes.INTEGER,
    },

    fk_trademark: {
      type: dataTypes.INTEGER,
    },

    fk_genre: {
      type: dataTypes.INTEGER,
    },
  };
  //VARIABLE DE CONFIGURACIÓN (timestamps no se para que sirve)
  const config = {
    tableName: 'products', //nombre en la db de mysql
    timestamps: false,
  };

  const Products = sequelize.define(alias, cols, config);

  Products.associate = function (models) {
    Products.belongsTo(models.ColorsTable),
      Products.belongsTo(models.CategoryTable),
      Products.belongsTo(models.TrademarksTable),
      Products.belongsTo(models.GenresTable);
    //REVISAR ESTE BLOQUE DE RELACIONES SI ESTÁ BIEN CONCATENADO AL TENER MAS DE UNA RELACIÓN EN UNA MISMA TABLA
  };

  return Products;
};
