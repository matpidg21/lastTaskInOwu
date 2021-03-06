const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = async userObject => {
    const UserModel = db.getModel(DB_TABLE_ENUM.USER);

    try {
        return await UserModel.create(userObject);
    } catch (e) {
        console.log(e);
    }
};
