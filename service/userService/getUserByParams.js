const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = searchObject => {
    const UserModel = db.getModel(DB_TABLE_ENUM.USER);
    try {
        return UserModel.findOne({
            where: searchObject
        })
    } catch (e) {

    }
};
