const router = require('express').Router();

const {adminController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/createAdmin-La-la-la', adminController.createAdmin);

router.post('/:user_id/block',
    authMiddleware.checkAccessToken,
    adminController.blockUser);

router.post('/:user_id/unblock',
    authMiddleware.checkAccessToken,
    adminController.unblockUser);

module.exports = router;
