const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Monolithic Service',
    architecture: 'Monolithic'
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v1/users', (req, res) => {
    response.data.push('Kevin', 'Claudia', 'Valentina');
    return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
    response.data.push('The Clean coder', 'Extra Life', 'Legendary Videogames');
    return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
    response.data.push('Toyota', 'BMW', 'Mazda');
    return res.send(response);
});

module.exports = app;