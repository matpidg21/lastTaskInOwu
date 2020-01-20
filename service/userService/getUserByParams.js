const db = require('../../dataBase').getInstance();

module.exports = searchObject =>{
    const UserModel = db.getModel('User');
    try {
        return UserModel.findOne({
            where:{
                email: searchObject
            }
        })
    }catch (e) {

    }
};
