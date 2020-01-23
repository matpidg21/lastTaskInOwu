const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = async orderObject => {
    console.log(orderObject);

    const UserModel = db.getModel(DB_TABLE_ENUM.ORDER);
    console.log(UserModel);

    try {
        return await UserModel.create(orderObject);
    } catch (e) {
        console.log(e);
    }
};
