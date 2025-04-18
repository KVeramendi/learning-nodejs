const { Router } = require('express');
const { ParseInMiddleware, AuthMiddleware, CacheMiddleware } = require('../middlewares');
const { CacheTimeHelper } = require('../helpers');

module.exports = function ({ IdeaController }) {
    const router = Router();
    router.get('', [ParseInMiddleware, CacheMiddleware(CacheTimeHelper.ONE_HOUR)], IdeaController.getAll);
    router.get('/:ideaId', IdeaController.get);
    router.get('/:userId/all', IdeaController.getUserIdeas);
    router.post('', AuthMiddleware, IdeaController.create);
    router.patch('/:ideaId', AuthMiddleware, IdeaController.update);
    router.delete('/:ideaId', AuthMiddleware, IdeaController.delete);
    router.post('/:ideaId/upvote', AuthMiddleware, IdeaController.upvoteIdea);
    router.post('/:ideaId/downvote', AuthMiddleware, IdeaController.downvoteIdea);
    return router;
}