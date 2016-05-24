'use strict';

module.exports = (app) => {

    return {
        on: function on(where, intro, next) {
            const $root = app.config.$mountPoint;

            const $videos = $root.find('video');
            let current = 0;

            $videos.on('ended', e => {
                const $current = $(e.target);

                $current.addClass('is-hidden');
                if(current < $videos.length) {
                    $videos.eq(current++).removeClass('is-hidden').get(0).play();
                } else {
                    app.router.setRoute('/hub');
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