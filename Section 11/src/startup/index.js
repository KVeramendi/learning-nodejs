const express = require('express');
const server = express();
let _config = null;
let _express = null;

class Server {
    constructor({ config, router }) {
        _config = config;
        _express = server.use(router);
    }

    start() {
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(_config.APP_NAME + ' API running on port ' + _config.PORT);
            });
        });
    }
}

module.exports = Server;
