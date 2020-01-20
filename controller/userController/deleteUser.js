const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.user;

        await userService.deleteUser({id: user_id});

        res.end('delete user')
    } catch (e) {
        console.log(e);
    }
};
