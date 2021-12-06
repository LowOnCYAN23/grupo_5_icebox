module.exports = function (sequelize, dataTypes) {
    let alias = 'TrademarksTable';
  
    let cols = {
      id_trademark: {
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
      tableName: 'trademark',
      timestamps: false,
    };
  
    let Trademarks = sequelize.define(alias, cols, config);
  
    Trademarks.associate = function (models) {
      Trademarks.hasMany(models.ProductsTable);
    };
    return Trademarks;
  };
  
 