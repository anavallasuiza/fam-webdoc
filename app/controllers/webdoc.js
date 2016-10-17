'use strict';


const wrap = require('co-express');

const uploader = require('../lib/uploader');
const selector = require('../lib/selector');
const _ = require('lodash');

/**
 * Home
 */

module.exports.index = (req, res) => {

    if (req.xhr) {
        return res.render('home', {
            layout: null
        });

    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

/**
 * Start
 */

module.exports.start = (req, res) => {

    if (req.xhr) {
        return res.render('start', {
            layout: null
        });

    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

/**
 * Intro
 */

module.exports.intro = (req, res) => {
    if (req.xhr) {
        return res.render('intro', {
            layout: null
        });
    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

/**
 * Mashup
 */

module.exports.mashup = wrap(function*(req, res) {
    if (req.xhr) {

        const selected = yield selector.select(req.params.uuid, req.params.where);

        return res.render('mashup', {
            videos: selected,
            where: req.params.where,
            disruptive: _.sample(['dis1.mp4', 'dis2.mp4', 'dis3.mp4']),
            layout: null
        });
    } else {
        return res.render('base', {
            app: 'main'
        });
    }
});

/**
 * Upload
 */

module.exports.upload = wrap(function*(req, res) {
    if (req.xhr) {
        yield uploader.upload(req.body.dest, req.body.name, req.file.buffer);

        return res.json({
            status: 'ok',
            name: req.body.name
        });

    } else {
        return res.redirect('/');
    }
});


/**
 * Hub
 */

module.exports.hub = (req, res) => {
    if (req.xhr) {
        return res.render('hub', {
            layout: null
        });
    } else {
        return res.render('base', {
            app: 'main'
        });
    }

};

/**
 * Sequences
 */

module.exports.sequence = (req, res) => {
    if (req.xhr) {

        const sequence = require(`../sequences/s${req.params.id}`)(req);
        return res.render('sequence', {
            layout: null,
            data: sequence
        });
    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};


/**
 * Locale
 */

module.exports.locale = (req, res) => {
    res.cookie('i18n', req.params.locale, {
        maxAge: 9000000
    });

    res.redirect('/start');
};
