const db = require('../../dataBase').getInstance();

module.exports = async tokenObject => {
    const OAuthModel = db.getModel('OAuthToken');

    try {
        return await OAuthModel.create(tokenObject);
    } catch (e) {
        console.log(e);
    }
};
