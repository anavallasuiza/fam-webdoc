'use strict';

const Circle = require('circleprogress');

module.exports = ($panel) => {
    const $video = $panel.find('video');
    const video = $video.get(0);
    let progress;

    return {
        init: () => {
            progress = new Circle($panel.find('.progress'), 120, 30, 0);
        },
        on: () => {
            video.play();

            $video.on('timeupdate', () => {
                progress.update((video.currentTime / video.duration).toFixed(2));
            });

        },
        after: () => {
            video.pause();
            $video.off('timeupdate');
        }
    };
};
