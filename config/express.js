'use strict';

const path = require('path');

const config = require('./');
const pkg = require('../package.json');

const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const logger = require('morgan');
const i18n = require('i18n');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const device = require('express-device');


const viewHelpers = require(path.join(config.root, 'app/lib/view-helpers'));


const env = config.env;

//Passport

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function(username, password, done) {
        if (username.valueOf() === 'admin' &&
            password.valueOf() === config.secret)
            return done(null, true);
        else
            return done(null, false);
    }
));

module.exports = function(app) {

    /**
     * Compression
     */

    app.use(compression());


    /**
     * Logger
     */

    if (env === 'development') {
        app.use(logger('dev'));
    }

    /**
     * Body parser
     */

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));


    /**
     * Static
     */

    if (env === 'development') {
        app.use('/static', express.static(path.join(config.root, 'dist')));
        app.use('/uploads', express.static(path.join(config.root, 'uploads')));
    }

    /**
     * Cookie
     */

    app.use(cookieParser());
    app.use(cookieSession({
        secret: config.secret
    }));


    /**
     * Session
     */

    if (env === 'development') {
        app.use(session({
            secret: config.secret,
            resave: true,
            saveUninitialized: true
        }));
    } else if (env === 'production') {
        const RedisStore = require('connect-redis')(session);
        app.use(session({
            store: new RedisStore({
                host: 'localhost',
                port: 6379
            }),
            secret: config.secret,
            resave: true,
            saveUninitialized: true
        }));


    }

    /**
     * Init i18n
     */

    i18n.configure(config.i18n);
    app.use(i18n.init);


    /**
     * views
     */

    app.set('views', path.join(config.root, 'app/views'));

    const hbs = exphbs.create({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        helpers: viewHelpers
    });


    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(device.capture());

    app.use(passport.initialize());

    /**
     * Some default locals
     */

    app.use(function(req, res, next) {
        res.locals.site = config.info;
        res.locals.pkg = pkg;

        hbs.handlebars.registerHelper('__', function() {
            return i18n.__.apply(req, arguments);
        });

        //TODO: refactor
        if (req.path !== '/sorry') {
            if (req.device.type !== 'desktop') {
                return res.redirect('/sorry');
            }

            const ua = req.headers['user-agent'];

            if (ua.match(/MSIE/) || ua.match(/Version\/[\d\.]+.*Safari/)) {
                return res.redirect('/sorry');
            }
        }

        return next();
    });


};
