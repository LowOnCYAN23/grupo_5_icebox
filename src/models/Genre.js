module.exports = function (sequelize, dataTypes) {

    let alias = "GenresTable";

    let cols = {

        id_genre: {
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
        tableName: "genres",
        timestamps: false
    };

    let Genres = sequelize.define(alias, cols, config);

    Genres.associate = function (models) {
        Genres.belongsTo(models.ProductsTable)
    }
    return Genres
    ;
};