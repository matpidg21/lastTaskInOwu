const {userService} = require('../../service');
const {USER_ROLE_ENUM} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const adminUpdate = USER_ROLE_ENUM.ADMIN;
        const {user_id} = req.user;

        await userService.updateUser({role_id: adminUpdate}, user_id);

        res.send('Update User to Admin!')

    } catch (e) {
        console.log(e);
    }
};
