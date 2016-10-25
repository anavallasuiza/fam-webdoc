'use strict';


module.exports = (app) => {
    const $root = app.config.$mountPoint;

    return {
        on: function on(next) {

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