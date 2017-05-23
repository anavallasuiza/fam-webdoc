'use strict';

const Circle = require('circleprogress');
const $ = require('jquery');
const subtitles = require('subtitles');


const $window = $(window);

module.exports = ($panel, app, door) => {
    const $video = $panel.find('video');
    const video = $video.get(0);
    let progress;
    let opened = false;
    const loadSubtitles = $video.is('[data-subtitles]');
    let subtitleHandler;

    if(loadSubtitles) {
        subtitleHandler = Object.create(subtitles.handler);
        subtitleHandler.init($video, app.subtitleViewer);
    }

    return {
        init: () => {
            progress = new Circle($panel.find('.progress'), 120, 30, 0);
        },
        on: () => {
            video.play();

            loadSubtitles && subtitleHandler.listen();

            $video.on('timeupdate', () => {
                progress.update((video.currentTime / video.duration).toFixed(2));

                if ($video.is('[data-door]') && !opened && (video.currentTime > 10)) {
                    door.show();
                    opened = true;
                }
            });

        },
        after: () => {
            video.pause();
            loadSubtitles && subtitleHandler.destroy();
            $video.off('timeupdate');
            $window.off('mousemove.door');
        }
    };
};
