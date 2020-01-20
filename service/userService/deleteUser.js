const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = (deleteObject) => {
    const UserModel = db.getModel(DB_TABLE_ENUM.USER);

    try {
        UserModel.destroy({
            where: deleteObject
        })
    } catch (e) {
        console.log(e);
    }
};
