const router = require('express').Router();

const {userController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post('/', userController.createUser);

router.put('/update',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.updateUser);

router.put('/changePassword',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.chengePasswordUser);

router.delete('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.deleteUser);


module.exports = router;
