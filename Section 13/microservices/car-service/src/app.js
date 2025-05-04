const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Car Service',
    architecture: 'Microservice'
};

const logger = message => console.log('[🚗 Car Service]: ' + message);
;

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/cars', (req, res) => {
    response.data.push('Peugeot', 'Mitsubishi', 'Ferrari');
    logger('Get car data');
    return res.send(response);
});

module.exports = app;