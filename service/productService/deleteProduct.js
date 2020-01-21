const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = (deleteObject) => {
    const ProductModel = db.getModel(DB_TABLE_ENUM.PRODUCT);

    try {
        ProductModel.destroy({
            where: deleteObject
        })
    } catch (e) {
        console.log(e);
    }
};
