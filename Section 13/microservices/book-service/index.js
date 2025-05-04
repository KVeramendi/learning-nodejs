const server = require('./src/app');
server.listen(process.env.PORT, () => {
    console.log('📘 Book Service started on port ' + process.env.PORT);
});
