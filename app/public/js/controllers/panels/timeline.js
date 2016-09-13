'use strict';

const $ = require('jquery');
const _ = require('lodash');
const inView = require('in-view');

const $window = $(window);

function range(v, range1, range2) {
    return (v - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) + range2[0];
}

module.exports = ($panel) => {
    const $handler = $panel.find('.handler');
    const $slider = $handler.find('.slider');
    const $scrubber = $slider.find('.scrubber');
    const $images = $panel.find('img');

    //TODO: update with better module
    inView('.timeline img').on('enter', function(img) {
        const $img = $(img);
        if ($img.data('year')) {
            $scrubber.find('.text').text($img.data('year'));
        }
    });

    return {
        on: () => {
            $handler.css('position', 'fixed');
            const contentOffset = $panel.offset().top;
            const contentHeight = $images.toArray().reduce((previous, current) => previous + $(current).outerHeight(), 0);
            const sliderHeight = $slider.outerHeight();
            const bottom = contentOffset + contentHeight - $images.last().outerHeight() - $scrubber.outerHeight();

            const positionHandler = () => {
                const pos = window.scrollY;

                if (pos > contentOffset && pos < bottom) {
                    const scruberPosition = range(pos, [contentOffset, bottom], [0, sliderHeight]);
                    $scrubber.css('margin-top', scruberPosition);
                }
            };

            $window.on('scroll.timeline', _.debounce(positionHandler, 5));
        },
        after: () => {
            $handler.css('position', 'absolute');
            $window.off('scroll.timeline');
        }
    };
};
