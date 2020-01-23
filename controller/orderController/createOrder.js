const {productService, orderService} = require('../../service');

module.exports = async (req, res) => {
    const {user_id: own_order_id} = req.user;
    const {product_id} = req.params;

    const {user_id: own_product_id} = await productService.getProductByParams({id: product_id});

    await orderService.createOrder({own_order_id, own_product_id});


    res.end('Create order');
};
