'use strict';
const $ = require('jquery');
const $window = $(window);

module.exports = (app) => {

    return {
        on: function on(next) {

            const $root = app.config.$mountPoint;

            const $parts = $root.find('.part');
            const $titles = $root.find('.titulo');

            const WIDTH = $window.width();
            const BOUNCE = 5;
            const IMAGES = $parts.length;
            const TITLES = $titles.length;

            let timeout;

            const show = (n) => {
                //Image
                $parts.removeClass('visible');
                $parts.eq(n).addClass('visible');

                //Titles
                $titles.removeClass('visible');
                $titles.eq(Math.floor((n * TITLES) / IMAGES)).addClass('visible');
            };

            $window.on('mousemove.fam', e => {

                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    const n = Math.floor((e.originalEvent.layerX * IMAGES) / WIDTH);

                    show(n);
                }, BOUNCE);

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