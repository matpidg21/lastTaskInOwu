const {adminService, userService} = require('../../service');
const {USER_STATUS_ENUM} = require('../../constant');

module.exports = async (req, res) => {
    const {user_id} = req.params;
    try {
        const {status_id, id} = await userService.getUserByParams({id: user_id});

        if (status_id === USER_STATUS_ENUM.ACTIVE) {
            throw new Error('You can\'t unblock already active user')
        }

        await adminService.unblockUser(id);


        res.end()
    } catch (e) {
        console.log(e);
    }


};
