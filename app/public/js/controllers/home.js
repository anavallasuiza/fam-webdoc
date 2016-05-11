'use strict';

const uuid = require('node-uuid');
const mediaRecorder = require('mediarecorder');

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;

            if (!app.user) {
                app.user = uuid.v1();
            }

            $root.find('[data-cancel]').on('click', e => {
                app.hasVideo = false;
                app.router.setRoute('/intro');
            });

            $root.find('[data-start]').on('click', e => {
                if (app.hasVideo) {
                    app.helpers.scrollTo($root.find('.permissions'));
                } else {
                    app.router.setRoute('/intro');
                }
            });

            $root.find('[data-activate]').on('click', e => {

                mediaRecorder.requestPermission()
                    .then(stream => {
                        for (let stream of stream.getTracks()) {
                            stream.stop();
                        }
                        app.hasVideo = true;
                        app.router.setRoute('/intro');
                    })
                    .catch((error) => {
                        app.hasVideo = false;
                        app.router.setRoute('/intro');
                    });
            });

            next();
        },
        after: function after(next) {
            next();
        }
    };
};