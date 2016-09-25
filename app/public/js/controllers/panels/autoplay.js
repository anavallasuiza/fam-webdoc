'use strict';

const Circle = require('circleprogress');
const $ = require('jquery');
const subtitles = require('subtitles');


const $window = $(window);

module.exports = ($panel, app, door) => {
    const $video = $panel.find('video');
    const video = $video.get(0);
    let progress;

    const subtitleHandler = Object.create(subtitles.handler);
    subtitleHandler.init($video, app.subtitleViewer);

    return {
        init: () => {
            progress = new Circle($panel.find('.progress'), 120, 30, 0);
        },
        on: () => {
            video.play();

            subtitleHandler.listen();

            $video.on('timeupdate', () => {
                progress.update((video.currentTime / video.duration).toFixed(2));
            });

            $video.on('ended', () => door.show());


        },
        after: () => {
            video.pause();
            subtitleHandler.destroy();
            $video.off('timeupdate');
            $window.off('mousemove.door');
        }
    };
};
