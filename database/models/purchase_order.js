module.exports = function (sequelize, dataTypes) {

    let alias = "PurchaseOrdersTable";

    let cols = {

        id_purchase_order: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        fk_id_user: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            notNull: true
        },
        shipping: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        paymetn_method: {
            type: dataTypes.STRING,
            notNull: true
        }
    };

    let config = {
        tableName: "purchase_order",
        timestamps: false
    };

    let PurchaseOrder = sequelize.define(alias, cols, config);

    PurchaseOrder.associate = function (models) {
        PurchaseOrder.belongsTo(models.UsersTable),
        PurchaseOrder.hasMany(models.CartsTable)
    }
    return PurchaseOrder
    ;
}