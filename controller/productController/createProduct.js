const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const product = req.body;
        console.log(product);
        const {user_id} = req.user;

        product.user_id = user_id;

        await productService.createProduct(product);
        res.send('Create Product')
    } catch (e) {
        console.log(e);
    }
};
