const {userService} = require('../../service');
const {USER_ROLE_ENUM, USER_STATUS_ENUM} = require('../../constant');


module.exports = async (req, res) => {
    try {
        const admin = req.body;
        admin.role_id = USER_ROLE_ENUM.ADMIN;
        admin.status_id = USER_STATUS_ENUM.ACTIVE;

        if (!admin.name || !admin.email || !admin.password) {
            throw new Error('Enter all values')
        }
        const sendAdmin = await userService.createUser(admin);

        res.json(sendAdmin)

    } catch (e) {
        console.log(e);
    }
};
