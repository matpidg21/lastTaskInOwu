const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {password, newPassword, rePassword} = req.body;
        const {user_id} = req.user;

        const user = await userService.getUserByParams({password: password});

        if (newPassword === rePassword && password === user.password) {

            await userService.updateUser({password: newPassword}, {id: user_id});
        }

        res.send('Update Password!')
    } catch (e) {
        console.log(e);
    }
};
