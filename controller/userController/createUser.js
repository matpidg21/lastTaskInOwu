const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const user = req.body;


        const sendUser = await userService.createUser(user);
        res.json(sendUser)
    } catch (e) {
        console.log(e);
    }
};
