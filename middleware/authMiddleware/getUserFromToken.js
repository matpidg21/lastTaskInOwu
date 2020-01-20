const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    const userFromAccessToken = await authService.getUserFromToken(token);

    if (!userFromAccessToken) {
        return next(new Error('No user'))
    }
    req.user = userFromAccessToken;

    next()
};
