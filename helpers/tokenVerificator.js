const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../constant');

module.exports = token => {
    jwt.verify(token, JWT_SECRET.ACCESS, err => {
        if (err) {
            throw new Error('Token is not valid')
        }
    })
};
