const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Book Service',
    architecture: 'Microservice'
};

const logger = message => console.log('[📘 Car Service]: ' + message);
;

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/books', (req, res) => {
    response.data.push('The Old War', 'Harry Potter', 'C++ Complete Guide');
    logger('Get book data');
    return res.send(response);
});

module.exports = app;