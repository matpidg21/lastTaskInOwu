const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const params = req.query;

        console.log(params);
        const filterUser = await productService.filterProduct({params});

        res.json(filterUser);

    } catch (e) {
        console.log(e);
    }
};
