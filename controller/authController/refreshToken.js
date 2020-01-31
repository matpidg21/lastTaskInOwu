const {tokenizer, tokenVerificator} = require('../../helpers');
const {oauthService, userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        tokenVerificator(token);

        const oauthTokens = await oauthService.getRefreshToken({access_token: token});

        if (!oauthTokens) {
            throw new Error('wrong token')
        }

        const user_id = oauthTokens.dataValues.user_id;

        const isUserPresent = await userService.getUserByParams({id: user_id});

        if(!isUserPresent){
            throw new Error('Not have user with this token')
        }

        await oauthService.deleteTokenPair({user_id, refresh_token: token});

        const tokens = tokenizer();

        await oauthService.insertToken({
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            user_id
        });

        res.json('Refresh tokens')
    } catch (e) {
        console.log(e);
    }
};
