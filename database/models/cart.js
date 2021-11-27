
module.exports = function (sequelize, dataTypes) {

    let alias = "Cart";

    let cols = {

        id_cart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        fk_id_user: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        fk_id_product: {
            type: dataTypes.INTEGER,
            notNull: true

        },
        fk_id_order: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        cant: {
            type: dataTypes.INTEGER,
            notNull: true
        }

    };

    let config = {

        tableName: "cart",//nombre en la db de mysql
        timestamps: false

    };
    
    let Cart = sequelize.define(alias, cols, config) {
        //faltan poner relaciones a las tablas
    }
}