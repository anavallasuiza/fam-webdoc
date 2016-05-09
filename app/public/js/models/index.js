'use strict';

const $ = require('jquery');

module.exports = (app) => {
    return {
        getPage(url) {
            return $.get(url);
        }
    };
};