'use strict';

const $ = require('jquery');
const DELAY = 1000;

module.exports = {
    scrollTo: ($element) => {
        $('html, body').animate({
            scrollTop: $element.offset().top
        }, DELAY);
    }
};