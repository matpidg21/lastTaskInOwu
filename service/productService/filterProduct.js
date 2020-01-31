const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = (filterObject) => {
    const ProductModel = db.getModel(DB_TABLE_ENUM.PRODUCT);
    try {
        return ProductModel.findAll({
            where: filterObject
        });
    } catch (e) {

    }
};
