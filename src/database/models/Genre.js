module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genres',
    {
      id_genre: {
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
  return Genre;
};
