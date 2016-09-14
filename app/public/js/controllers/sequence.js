'use strict';

const $ = require('jquery');
const _ = require('lodash');
window.$ = window.jQuery = $;

$.fn.scrollTo = function(elem, speed) {
    $(this).animate({
        scrollTop: $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};


function lastVisibleInContainer(elements) {
    return _.last(elements.map(element => {
        const parent = element.parentElement;
        const rect = element.getBoundingClientRect();
        const rectParent = parent.getBoundingClientRect();

        if (((rect.top + element.clientHeight) > 0) && (rect.top < parent.clientHeight) && (rectParent.left < window.innerWidth)) {
            return element;
        }

    }).filter(Boolean));

}

module.exports = (app) => {

    return {
        on: function on(id, next) {
            const $root = app.config.$mountPoint;
            const $panels = $root.find('.panel');
            let current = $panels.get(0);
            const handlers = new Map();

            for (const panel of $panels) {
                const $panel = $(panel);
                const handler = require(`./panels/${$panel.data('type')}`)($panel);

                //Init panel if necessary
                handler.init && handler.init();

                handlers.set(panel, handler);
            }


            const checkViewport = () => {
                const visible = lastVisibleInContainer($panels.toArray());
                if (current !== visible) {
                    handlers.get(current).after();
                    handlers.get(visible).on();

                    current = visible;
                }

            };

            $($panels.parent()).on('scroll.sequence', _.debounce(checkViewport, 5)).trigger('scroll.sequence');



            $('body').css('overflow', 'hidden');


            next();
        },
        after: function after(id, next) {
            $('body').css('overflow', 'auto');

            next();
        }
    };
};
