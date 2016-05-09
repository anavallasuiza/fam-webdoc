'use strict';

const uuid = require('node-uuid');

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;

            if (!app.user) {
                app.user = uuid.v1();
            }

            $root.find('[data-cancel]').on('click', e => {
                app.config.novideo = true;
                app.router.setRoute('/intro');
            });

            $root.find('[data-activate]').on('click', e => {
                const p = navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                });

                p.then(stream => {
                    for (let stream of stream.getTracks()) {
                        stream.stop();
                    }
                });

                p.catch(function(error) {
                    console.log('pasou', error);
                });
            });

            next();
        },
        after: function after(next) {
            next();
        }
    };
};