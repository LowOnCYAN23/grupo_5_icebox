module.exports = function (sequelize, dataTypes) {

    let alias = "TrademarksTable";

    let cols = {

        id_trademark: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        }
    };

    let config = {
        tableName: "trademark",
        timestamps: false
    };

    let Trademark = sequelize.define(alias, cols, config);
  
    Trademark.associate = function (models) {
      Trademark.hasMany(models.ProductsTable);//falta completar asociación
    };
    return Trademark;
  };