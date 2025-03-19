const express = require('express');
const server = express();
const fs = require('fs');
const home = fs.readFileSync('./home.html')
const game = fs.readFileSync('./game.html');
const port = 8080;

server.get('/', getHomePage);

server.get('/game', (req, res) => {
    res.write(game);
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});

function getHomePage(req, res) {
    res.write(home);
    res.end();
}