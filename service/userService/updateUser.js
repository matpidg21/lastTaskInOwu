const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = (updateObject, user_id) => {
    const UserModel = db.getModel(DB_TABLE_ENUM.USER);

    console.log(updateObject);
    try {
        UserModel.update(updateObject, {
            where: {
                id: user_id
            },
            returning: true
        })
    } catch (e) {
        console.log(e);
    }
};
