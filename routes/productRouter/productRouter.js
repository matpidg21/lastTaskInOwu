const router = require('express').Router();

const {productController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.createProduct
);

router.delete('/:product_id/delete' ,
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.deleteProduct
);


module.exports = router;
