'use strict';


module.exports = (app) => {
    const $root = app.config.$mountPoint;



    window.ga('set', 'page', '/end/' + $root.find('.end').data('page'));
    window.ga('send', 'pageview');

    return {
        on: function on(next) {

            window.ga('set', 'page', '/intro');
            window.ga('send', 'pageview');


            $root.find('video').on('click.end', (e) => {
                const video = e.target;

                if(video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            next();
        },
        after: function after(next) {
            $root.find('video').off('click.end');
            next();
        }
    };
};