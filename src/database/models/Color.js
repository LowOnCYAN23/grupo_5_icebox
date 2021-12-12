module.exports = function (sequelize, dataTypes) {

  let alias = "ColorsTable";

  let cols = {

      id_color: {
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
      tableName: "colors",
      timestamps: false
  };

  let Color = sequelize.define(alias, cols, config);

  Color.associate = function(models) {
    Color.belongsTo(models.ProductTable,{
      as: "Product",
      foreingKey: "fk_id_color"
    });
  };
  return Color;
};
