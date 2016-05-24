'use strict';
const $ = require('jquery');
const $window = $(window);

module.exports = (app) => {

    return {
        on: function on(next) {

            const $root = app.config.$mountPoint;

            const $parts = $root.find('.part');
            const $titles = $root.find('.titulo');

            const windowWidth = $window.width();
            const bounce = 5;

            let timeout;

            const show = (n) => {
                //Image
                $parts.removeClass('visible');
                $parts.eq(n).addClass('visible');

                //Titles
                $titles.removeClass('visible');
                $titles.eq(Math.floor((n * $titles.length) / $parts.length)).addClass('visible');
            };

            $window.on('mousemove.fam', e => {

                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    const n = Math.floor((e.originalEvent.layerX * $parts.length) / windowWidth);

                    show(n);
                }, bounce);

            });

            show(0);
            next();
        },
        after: function after(next) {
            $window.off('mousemove.fam');
            next();
        }
    };
};