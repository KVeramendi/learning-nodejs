module.exports = (err, req, res, next) => {
    const htppStatus = err.status || 500;
    return res.status(htppStatus).send({
        status: htppStatus,
        message: err.message || 'Internal server error'
    });
}