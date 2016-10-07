'use strict';

/**
 * ENV variables:
 *
 *  - HOST
 *  - PORT
 *
 *  - NODE_ENV
 *  - SECRET
 *  - LOCALES
 *  - DEFAULT_LOCALE
 *  - NAME
 *  - EMAIL
 *  - URL
 *  - DESCRIPTION
 *  - IMAGE
 */

const express = require('express');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;


/**
 * Server module
 */

module.exports.startServer = function () {
    const app = express();

    /**
     * Bottstrap App
     */

    require('./config/express')(app);
    require('./config/routes')(app);


    /**
     * Server
     */
    const serve = () => {
        app.listen(port, host);
        console.warn(`App listening on ${host}:${port}`);
    };

    serve();
};


if (require.main === module) {
    module.exports.startServer();
}