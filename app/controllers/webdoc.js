'use strict';


const path = require('path');
const fs = require('fs');
const wrap = require('co-express');

const uploader = require('../lib/uploader');
const selector = require('../lib/selector');
const allvideos = require('../lib/allvideos');
const config = require('../../config/');

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
            layout: null,
            pos: 'intro'
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
            //disruptive: req.params.where === 'intro' ? _.sample(['dis1.mp4', 'dis2.mp4', 'dis3.mp4']) : false,
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
 * Outro
 */

module.exports.outro = (req, res) => {
    if (req.xhr) {
        return res.render('intro', {
            layout: null,
            pos: 'outro'
        });
    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

/**
 * End
 */

module.exports.share = (req, res) => {

    if (req.xhr) {
        return res.render('share', {
            layout: null
        });

    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

module.exports.videos = wrap(function*(req, res) {
    const videos = yield allvideos.get();


    if (req.xhr) {
        return res.render('videos', {
            videos: Array.from(videos),
            layout: null
        });

    } else {
        return res.render('base', {
            app: 'main'
        });
    }
});

module.exports.credits = (req, res) => {

    if (req.xhr) {
        return res.render('credits', {
            layout: null
        });

    } else {
        return res.render('base', {
            app: 'main'
        });
    }
};

module.exports.VMList = wrap(function*(req, res) {
    const videos = yield allvideos.get();

    return res.render('admin/videos', {
        videos: _.sortBy(Array.from(videos), 'name'),
        layout: 'admin',
        app: 'admin'
    });

});


module.exports.VMDelete = (req, res) => {
    const file = req.body.delete;
    fs.unlinkSync(path.join(config.uploads, file));

    res.redirect('/admin/videos');
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

/**
 * Sorry
 */

module.exports.sorry = (req, res) => {
    return res.render('sorry', {
        layout: 'simple'
    });

};
