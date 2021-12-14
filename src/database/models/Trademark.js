module.exports = (sequelize, DataTypes) => {
  const Trademark = sequelize.define(
    'Genres',
    {
      id_trademark: {
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
  return Trademark;
};
