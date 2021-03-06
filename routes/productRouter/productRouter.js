const router = require('express').Router();

const {productController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.createProduct
);

router.delete('/:product_id/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.deleteProduct
);

router.put('/:product_id/update',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.updateProduct
);

router.get('/allProduct', productController.getAllProduct);

router.get('/filterProduct', productController.filterProduct);


module.exports = router;
