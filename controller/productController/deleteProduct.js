const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        // const {user_id} = req.user;
        const {product_id} = req.params;

        productService.deleteProduct({id: product_id});
        res.end('delete product')
    } catch (e) {
        console.log(e);
    }
};
