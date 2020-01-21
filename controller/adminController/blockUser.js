const {adminService, oauthService, userService} = require('../../service');
const {USER_STATUS_ENUM} = require('../../constant');

module.exports = async (req, res) => {
    const {user_id} = req.params;
    try {
        const {status_id, id} = await userService.getUserByParams({id: user_id});


        // if (!user) {
        //     throw new Error('User is not present')
        // }

        if (status_id === USER_STATUS_ENUM.BLOCKED) {
            throw new Error('You can\'t already blocked user')
        }

        await adminService.blockUser(id);
        await oauthService.deleteTokenPair({user_id: id});

        res.end()
    } catch (e) {
        console.log(e);
    }


};
