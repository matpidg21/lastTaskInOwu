module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        own_order_id: {
            type: DataTypes.INTEGER
        },
        own_product_id: {
            type: DataTypes.INTEGER
        },
        create_ad: {
            type: DataTypes.STRING,
            defaultValue: sequelize.fn('now')
        },
    }, {
        tableName: 'order',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    const Product = sequelize.import('./Product.js');

    Order.belongsTo(User, {foreignKey: 'own_order_id'});
    Order.belongsTo(Product, {foreignKey: 'own_product_id'})

    return Order;
};
