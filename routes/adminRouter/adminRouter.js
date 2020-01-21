const router = require('express').Router();

const {adminController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.put('/updateUserToAdmin-La-la-la',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    adminController.updateUserToAdmin);

router.post('/:user_id/block', authMiddleware.checkAccessToken,adminController.blockUser);

router.post('/:user_id/unblock', authMiddleware.checkAccessToken,adminController.unblockUser);
module.exports = router;
