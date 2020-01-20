const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = findObject => {
    const OAuthModel = db.getModel(DB_TABLE_ENUM.OAUTH_TOKEN);

    try {
        return OAuthModel.findOne({
            where: {
                access_token: findObject
            },
            attributes: ['user_id']
        })
    } catch (e) {
        console.log(e);
    }
};
