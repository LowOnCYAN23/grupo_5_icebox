module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Categories',
    {
      id_category: {
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
  return Category;
};
