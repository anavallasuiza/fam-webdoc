'use strict';

const path = require('path');
const passport = require('passport');


const config = require('./');

/**
 * Controllers
 */

const webdoc = require(path.join(config.root, 'app/controllers/webdoc'));
const multer = require('multer')();

module.exports = (app) => {

    /**
     * Public
     */
    app.get('/', webdoc.index);
    app.get('/start', webdoc.start);
    app.get('/intro', webdoc.intro);
    app.get('/mashup/:where/:uuid', webdoc.mashup);
    app.get('/hub', webdoc.hub);
    app.get('/sequence/:id', webdoc.sequence);
    app.get('/outro', webdoc.outro);
    app.get('/end/share', webdoc.share);
    app.get('/end/videos', webdoc.videos);
    app.get('/end/credits', webdoc.credits);
    app.get('/sorry', webdoc.sorry);
    app.get('/admin/videos', passport.authenticate('basic', { session: false }), webdoc.VMList);
    app.post('/admin/videos', passport.authenticate('basic', { session: false }), webdoc.VMDelete);


    /**
     * Upload
     */
    app.post('/upload', multer.single('video'), webdoc.upload);


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
        app.use(function(err, req, res) {
            res.status(err.status || 500);
            return res.render('error', {
                layout: 'simple',
                message: err.message,
                error: err.stack
            });
        });
    }

    app.use(function(err, req, res) {
        res.status(err.status || 500);
        return res.render('error', {
            layout: 'simple',
            message: err.message
        });
    });
};
