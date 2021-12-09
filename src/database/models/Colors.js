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
  return Color;
};
