const Purchase_order = require("./Purchase_order");

module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    id_user: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "users",
    timestamps: false
  };
  
  const User = sequelize.define(alias, cols, config);
  
  User.associate = function(models) {
    User.hasMany(models.Cart,{
      as: "Cart",
      foreingKey: "fk_id_user"
    });
  };
  User.associate = function(models) {
    User.hasMany(models.Purchase_order,{
      as: "Purchase_order",
      foreingKey: "fk_id_user"
    });
  };
  return User;
};