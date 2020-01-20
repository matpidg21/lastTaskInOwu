const {userService,oauthService } = require('../../service');
const {tokenizer} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        const foundUser = await userService.getUserByParams(email);

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
