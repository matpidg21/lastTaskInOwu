const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = searchObject => {
    const ProductModel = db.getModel(DB_TABLE_ENUM.PRODUCT);
    try {
        return ProductModel.findOne({
            where: searchObject
        })
    } catch (e) {
        console.log(e);
    }
};
