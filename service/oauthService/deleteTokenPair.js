const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');


module.exports = (deleteObject) => {
    const TokenModel = db.getModel(DB_TABLE_ENUM.OAUTH_TOKEN);

    TokenModel.destroy({
        where: deleteObject

    })
};
