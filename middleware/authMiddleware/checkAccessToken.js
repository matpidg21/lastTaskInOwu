const {tokenVerificator} = require('../../helpers');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    console.log(token);
    if (!token) {
        throw new Error('Not token');
    }

    tokenVerificator(token);

    next()
};
