const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function ({ HomeRoute, UserRoute, IdeaRoute, CommentRoute, AuthRoute }) {
    const router = express.Router();
    const apiRoutes = express.Router();
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());
    apiRoutes.use('/home', HomeRoute);
    apiRoutes.use('/user', UserRoute);
    apiRoutes.use('/idea', IdeaRoute);
    apiRoutes.use('/comment', CommentRoute);
    apiRoutes.use('/auth', AuthRoute);
    router.use('/v1/api', apiRoutes);
    router.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
}