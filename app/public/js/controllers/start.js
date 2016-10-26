'use strict';

const uuid = require('node-uuid');
const mediaRecorder = require('mediarecorder');
const VideoCanvas = require('videocanvas');
const $ = require('jquery');

module.exports = (app) => {
    return {
        on: function on(next) {
            window.ga('set', 'page', '/start');
            window.ga('send', 'pageview');


            const $root = app.config.$mountPoint;
            const $video = $root.find('.front-video video');
            const $canvas = $root.find('.front-video canvas');

            $('body').css('overflow', 'hidden');

            function checkSupport() {
                $('html, body').animate({
                    scrollTop: $root.find('.permissions').offset().top
                }, 2000);
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
                        console.log('si que hai video e audio');
                        for (let st of stream.getTracks()) {
                            st.stop();
                        }
                        app.hasVideo = true;
                        app.router.setRoute('/intro');
                    })
                    .catch(() => {
                        console.log('non hai video ou audio');
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
