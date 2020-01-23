const router = require('express').Router();

const {orderController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/:product_id',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    orderController.createOrder);

module.exports = router;
