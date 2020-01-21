const {userService,oauthService } = require('../../service');
const {tokenizer} = require('../../helpers');
const {USER_STATUS_ENUM} = require('../../constant');


module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        const foundUser = await userService.getUserByParams({email: email});

        if(foundUser.status_id === USER_STATUS_ENUM.BLOCKED){
            throw new Error('User is blocked')
        }

        if (!foundUser) {
            throw new Error('User is not found')
        }
        const tokens = tokenizer();

        await oauthService.insertToken({
            user_id: foundUser.id,
            ...tokens
        });

        res.json(tokens)
    } catch (e) {
        console.log(e);
    }
};
