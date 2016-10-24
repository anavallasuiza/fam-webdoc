'use strict';

const uuid = require('node-uuid');
const mediaRecorder = require('mediarecorder');
const VideoCanvas = require('videocanvas');
const $ = require('jquery');

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;
            const $video = $root.find('.front-video video');
            const $canvas = $root.find('.front-video canvas');

            $('body').css('overflow', 'hidden');

            function checkSupport() {
                navigator.getUserMedia({video: true}, function() {
                    $('html, body').animate({
                        scrollTop: $root.find('.permissions').offset().top
                    }, 2000);

                }, function() {
                    app.hasVideo = false;
                    app.router.setRoute('/intro');
                });
            }


            const videomask = new VideoCanvas($video.get(0), $canvas.get(0), $canvas.data('font'), $canvas.data('hpos'), $canvas.data('text'));

            videomask.start();

            if (!app.user) {
                app.user = uuid.v1();
            }

            $(window).one('mousewheel DOMMouseScroll keydown', (e) => {
                $root.find('.tipology').addClass('active');
                setTimeout(() => {
                    $(window).one('mousewheel DOMMouseScroll keydown', checkSupport);
                }, 3000);
            });

            $root.find('[data-start]').on('click', checkSupport);


            $root.find('[data-cancel]').on('click', () => {
                app.hasVideo = false;
                app.router.setRoute('/intro');
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
