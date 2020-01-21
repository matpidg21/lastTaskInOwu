const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM, USER_STATUS_ENUM} = require('../../constant');

module.exports = (user_id) => {
    const UserModel = db.getModel(DB_TABLE_ENUM.USER);

    UserModel.update({
            status_id: USER_STATUS_ENUM.BLOCKED
        },
        {
            where: {
                id: user_id
            }
        })
};
