'use strict';

const $ = require('jquery');
const inView = require('in-view');

function range(v, range1, range2) {
    return (v - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) + range2[0];
}

module.exports = ($panel) => {
    const $handler = $panel.find('.handler');
    const $slider = $handler.find('.slider');
    const $scrubber = $slider.find('.scrubber');
    const $images = $panel.find('img');

    const contentOffset = $panel.offset().top;
    const contentHeight = $images.toArray().reduce((previous, current) => previous + $(current).outerHeight(), 0);
    const sliderHeight = $slider.outerHeight();
    const $parent = $panel.parent();

    let scrollSpy;

    const bottom = contentOffset + contentHeight - $images.last().outerHeight() - $scrubber.outerHeight();

    // TODO: update with better module
    inView('.timeline img').on('enter', function(img) {
        const $img = $(img);
        if ($img.data('year')) {
            $scrubber.find('.text').text($img.data('year'));
        }
    });

    return {
        on: () => {
            const positionHandler = () => {
                const pos = $parent.scrollTop();

                if (pos >= contentOffset && pos <= bottom) {
                    const scruberPosition = range(pos, [contentOffset, bottom], [0, sliderHeight]);
                    $scrubber.css('margin-top', Math.floor(scruberPosition));
                }
            };

            scrollSpy = setInterval(positionHandler, 50);

            $scrubber.css('margin-top', '0px');

        },
        after: () => {
            clearInterval(scrollSpy);
        }
    };
};
