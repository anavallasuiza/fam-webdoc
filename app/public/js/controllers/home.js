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

            next();
        },
        after: function after(next) {
            next();
        }
    };
};