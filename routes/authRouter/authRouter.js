const router = require('express').Router();

const {authController} = require('../../controller');


router.post('/', authController.authUser);

router.put('/refreshPassword', authController.authUser);

module.exports = router;
