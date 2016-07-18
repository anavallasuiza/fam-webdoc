'use strict';

const uuid = require('node-uuid');
const mediaRecorder = require('mediarecorder');
const VideoCanvas = require('videocanvas');

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;
            const $video = $root.find('.front-video video');
            const $canvas = $root.find('.front-video canvas');

            const videomask = new VideoCanvas($video.get(0), $canvas.get(0));

            videomask.start();

            if (!app.user) {
                app.user = uuid.v1();
            }

            $root.find('[data-cancel]').on('click', () => {
                app.hasVideo = false;
                app.router.setRoute('/intro');
            });

            $root.find('[data-start]').on('click', () => {
                if (app.hasVideo) {
                    app.helpers.scrollTo($root.find('.permissions'));
                } else {
                    app.router.setRoute('/intro');
                }
            });

            $root.find('[data-activate]').on('click', () => {

                mediaRecorder.requestPermission()
                    .then(stream => {
                        for (let st of stream.getTracks()) {
                            st.stop();
                        }
                        app.hasVideo = true;
                        app.router.setRoute('/intro');
                    })
                    .catch(() => {
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