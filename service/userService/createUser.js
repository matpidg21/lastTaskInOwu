const db = require('../../dataBase').getInstance();


module.exports = async userObject => {
    const UserModel = db.getModel('User');

    try {
        return await UserModel.create(userObject);
    } catch (e) {
        console.log(e);
    }
};
