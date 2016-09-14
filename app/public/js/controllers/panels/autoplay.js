'use strict';

const Circle = require('circleprogress');
const $ = require('jquery');
const _ = require('lodash');

const $window = $(window);

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

            if ($panel.has('.door')) {
                const $door = $panel.find('.door');
                const handlePosition = (e) => {
                    const pos = e.clientX;
                    if (pos > $window.width() * 0.80) {
                        $door.css('left', '50vw');
                    } else {
                        $door.css('left', '100vw');
                    }
                };

                $window.on('mousemove.door', _.debounce(handlePosition, 20));

                $door.on('click', () => {
                    $('.sequence').addClass('lateral');
                    $('.sequence .side').trigger('scroll.sequence');
                });
            }

        },
        after: () => {
            video.pause();
            $video.off('timeupdate');
            $window.off('mousemove.door');
        }
    };
};
