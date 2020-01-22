const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const productUpdate = req.body;
        const product_id = req.params;


        await productService.updateProduct(productUpdate, product_id);

        res.send('Update product!')

    } catch (e) {
        console.log(e);
    }
};
