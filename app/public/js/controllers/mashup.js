'use strict';

const $ = require('jquery');

module.exports = (app) => {

    return {
        on: function on(where, uuid, next) {
            window.ga('set', 'page', '/mashup');
            window.ga('send', 'pageview');


            const $root = app.config.$mountPoint;

            const $videos = $root.find('video');
            let current = 0;

            $videos.on('ended', e => {
                const $current = $(e.target);

                $current.addClass('is-hidden');
                if(current < $videos.length) {
                    $videos.eq(current++).removeClass('is-hidden').get(0).play();
                } else {
                    if(where === 'intro') {
                        app.router.setRoute('/hub');
                    } else {
                        app.router.setRoute('/end/share');
                    }
                }
            });

            $videos.eq(current++).removeClass('is-hidden').get(0).play();

            next();
        },
        after: function after(next) {
            next();
        }
    };
};