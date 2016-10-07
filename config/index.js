'use strict';

const path = require('path');
const _ = require('lodash');

/**
 * Envs
 */

//TODO: simplify this
const development = require('./env/development');
const production = require('./env/production');

/**
 * Default config
 */

//TODO: configure i18n here so we can use translations in config.info
const defaults = {
    root: path.join(__dirname, '..'),
    uploads: path.join(__dirname, '..', 'uploads'),
    subtitles: path.join(__dirname, '..', 'app/public/media/subtitles'),
    sampleVideos: 5,
    i18n: {
        directory: path.join(__dirname, 'locales'),
        syncFiles: true,
        cookie: 'i18n'
    }
};


module.exports = {
    development: _.merge(development, defaults),
    production: _.merge(production, defaults)
}[process.env.NODE_ENV || 'development'];