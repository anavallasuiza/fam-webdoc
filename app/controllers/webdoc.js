'use strict';


const wrap = require('co-express');

const uploader = require('../lib/uploader');
const selector = require('../lib/selector');
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

module.exports.mashup = wrap(function* (req, res) {
    if (req.xhr) {

        const selected = yield selector.select(req.params.uuid, req.params.where);

        return res.render('mashup', {
            videos: selected,
            where: req.params.where,
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

module.exports.upload = wrap(function* (req, res) {
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
 * Locale
 */

module.exports.locale = (req, res) => {
    res.cookie('locale', req.params.locale, {
        maxAge: 900000
    });

    res.redirect('back');
};