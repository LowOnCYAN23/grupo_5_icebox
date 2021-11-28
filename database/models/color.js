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

    let Colors = sequelize.define(alias, cols, config);

    Colors.associate = function (models) {
        Colors.hasMany(models.ProductsTable)
    }
    return Colors
    ;
}