'use strict';

const wrap = require('co-express');

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
 * Locale
 */

module.exports.locale = (req, res) => {
    res.cookie('locale', req.params.locale, {
        maxAge: 900000
    });

    res.redirect('back');
};