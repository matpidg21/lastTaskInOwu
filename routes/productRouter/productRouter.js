const router = require('express').Router();

const {productController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.createProduct
);

module.exports = router;
