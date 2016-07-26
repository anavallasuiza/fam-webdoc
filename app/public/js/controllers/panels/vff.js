'use strict';

const $ = require('jquery');
const Circle = require('circleprogress');


module.exports = ($panel) => {
    const $window = $(window);
    const $video = $panel.find('video');
    const video = $video.get(0);

    const height = $panel.height() - $video.height();
    const top = $panel.offset().top;

    const $progressBar = $panel.find('.progress');


    let audio;
    const $audio = $panel.find('audio');

    if ($audio.length) {
        audio = $audio.get(0);
    }

    let progress;
    let currentPos = 0;
    let interval;

    return {
        init: () => {
            if (audio) {
                progress = new Circle($progressBar, 120, 30, 0);
            }
        },
        on: () => {
            if (audio) {
                audio.volume = 0;
                audio.play();

                $audio.animate({ volume: 1 }, 1000);
                $progressBar.removeClass('is-hidden').css('position', 'fixed');

                $audio.on('timeupdate', () => {
                    progress.update((audio.currentTime / audio.duration).toFixed(2));
                });

            }

            video.currentTime = 0;

            $window.on('scroll.vff', () => {
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
            $audio.off('timeupdate');

            if (audio) {
                $audio.animate({ volume: 0 }, 1000, () => audio.pause());
                $progressBar.addClass('is-hidden');

            }

            clearInterval(interval);

            video.currentTime = 0;
            currentPos = 0;
            video.pause();
        }
    };
};
