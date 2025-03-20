const express = require('express');
const server = express();
const { HomeRoute, QuotesRoute } = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');
const { PORT } = require('./config.js');

server.use(express.static('./public'));
server.use(express.json());
// server.use(express.urlencoded({ extended: false }));
server.use('/', HomeRoute);
server.use('/', QuotesRoute);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Aplication is running on PORt ${PORT}`);
})