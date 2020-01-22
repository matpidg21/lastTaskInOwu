const {userService} = require('../../service');
const {USER_ROLE_ENUM,USER_STATUS_ENUM} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const user = req.body;
        user.role_id = USER_ROLE_ENUM.USER;
        user.status_id = USER_STATUS_ENUM.ACTIVE;

        if(!user.name || !user.email || !user.password){
            throw new Error('Enter all values')
        }

        const sendUser = await userService.createUser(user);
        res.json(sendUser)
    } catch (e) {
        console.log(e);
    }
};
