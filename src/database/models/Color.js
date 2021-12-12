module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define(
    'Colors',
    {
      id_color: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  Color.associate = function(models) {
    Color.hasMany(models.Product,{
      as: "Product",
      foreingKey: "fk_id_color"
    });
  };
  return Color;
};
