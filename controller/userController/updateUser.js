const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userUpdate = req.body;
        const {user_id} = req.user;

        console.log(userUpdate);
        await userService.updateUser(userUpdate, user_id);

        res.send('Update User!')

    } catch (e) {
        console.log(e);
    }
};
