'use strict';

const path = require('path');

const config = require('./');

/**
 * Controllers
 */

const webdoc = require(path.join(config.root, 'app/controllers/webdoc'));


module.exports = (app, passport) => {

    /**
     * Public
     */

    app.get('/', webdoc.index);
    app.get('/intro', webdoc.intro);


    //Locales
    app.get('/locale/:locale', webdoc.locale);


    /**
     * Error Handling
     */

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            return res.render('error', {
                layout: 'simple',
                message: err.message,
                error: err.stack
            });
        });
    }

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        return res.render('error', {
            layout: 'simple',
            message: err.message,
            error: {}
        });
    });
};