const { Router } = require('express');
const { AuthMiddleware, ParseInMiddleware, CacheMiddleware } = require('../middlewares');
const { CacheTimeHelper } = require('../helpers');

module.exports = function ({ UserController }) {
    const router = Router();
    router.get('', [AuthMiddleware, ParseInMiddleware, CacheMiddleware(CacheTimeHelper.ONE_HOUR)], UserController.getAll);
    router.get('/:userId', UserController.get);
    router.patch('/:userId', UserController.update);
    router.delete('/:userId', UserController.delete);
    return router;
}