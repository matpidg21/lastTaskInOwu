const jwr = require('jsonwebtoken');

const {JWT_SECRET} = require('../constant');

module.exports = () => {
    const access_token = jwr.sign({}, JWT_SECRET.ACCESS, {expiresIn: '24h'});
    const refresh_token = jwr.sign({}, JWT_SECRET.REFRESH, {expiresIn: '96h'});

    return {
        access_token,
        refresh_token
    }
};
