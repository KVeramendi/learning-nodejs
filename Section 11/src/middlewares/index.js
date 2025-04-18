module.exports = {
    NotFoundMiddleware: require('./not_found.middleware'),
    ErrorMiddleware: require('./error.middleware'),
    AuthMiddleware: require('./auth.middleware'),
    ParseInMiddleware: require('./parse_in.middleware'),
    CacheMiddleware: require('./cache.middleware')
}