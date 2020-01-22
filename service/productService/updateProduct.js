const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = (updateObject, product_id) => {
    const ProductModel = db.getModel(DB_TABLE_ENUM.PRODUCT);

    try {
        ProductModel.update(updateObject, {
            where: {
                id: product_id
            },
            returning: true
        })
    } catch (e) {
        console.log(e);
    }
};
