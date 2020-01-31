const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');


module.exports = (tokenObject) => {
    const TokenModel = db.getModel(DB_TABLE_ENUM.OAUTH_TOKEN);

    return TokenModel.findOne({
        where: tokenObject
    })
};
