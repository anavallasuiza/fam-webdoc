'use strict';

const VideoCanvas = require('videocanvas');

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;

            const $video = $root.find('.front-video video');
            const $canvas = $root.find('.front-video canvas');

            const videomask = new VideoCanvas($video.get(0), $canvas.get(0), $canvas.data('font'), $canvas.data('hpos'), $canvas.data('text'));

            videomask.start();

            function inIframe () {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return true;
                }
            }

            $root.find('.lang').on('click', (e) => {
                if(inIframe()) {
                    window.open('http://webdoc.projectefam.cc');
                    e.preventDefault();
                }
            });

            next();
        },
        after: function after(next) {
            next();
        }
    };
};