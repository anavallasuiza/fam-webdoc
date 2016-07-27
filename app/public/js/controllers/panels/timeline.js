'use strict';

const Draggabilly = require('draggabilly');
const _ = require('lodash');
let scrubber;

module.exports = ($panel) => {
    const $scrubber = $panel.find('.scrubber');
    const $slider = $panel.find('.slider');
    const $canvas = $panel.find('.canvas');
    return {
        init: () => {
            scrubber = new Draggabilly($scrubber.get(0), {
                axis: 'y',
                containment: $slider.get(0)
            });
        },
        on: () => {

            scrubber.on('dragMove', _.debounce((event, pointer) => {
                const relativePosition = scrubber.position.y / $slider.height();
                console.log(-1 * ($canvas.outerHeight() * relativePosition));

                $canvas.css('transform', `translateY(${-1 * ($canvas.outerHeight() * relativePosition)}px)`);
            }, 100));
        },
        after: () => {

        }
    };
};
