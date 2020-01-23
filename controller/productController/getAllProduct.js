const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const products = await productService.getAllProduct();
        res.json(products);
    } catch (e) {
        console.log(e);
    }
};
