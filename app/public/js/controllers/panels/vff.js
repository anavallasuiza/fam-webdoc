'use strict';

const $ = require('jquery');

module.exports = ($panel) => {
    const $window = $(window);
    const $video = $panel.find('video');
    const video = $video.get(0);
    const height = $panel.height() - $video.height();
    const top = $panel.offset().top;

    let currentPos;
    let interval;

    return {
        on: () => {
            $window.on('scroll.vff', (e) => {
                const pos = $window.scrollTop() - top;
                const percent = pos / height;

                if (percent >= 0 && percent <= 1) {
                    currentPos = (video.duration * percent).toFixed(2);
                }
            });

            interval = setInterval(() => {
                if (video.readyState >= 3) {
                    video.currentTime = currentPos;
                    video.pause();
                }

            }, 40);
        },
        after: () => {
            $window.off('scroll.vff');

            clearInterval(interval);

            video.currentTime = 0;
            currentPos = 0;
            video.pause();
        }
    };
};
