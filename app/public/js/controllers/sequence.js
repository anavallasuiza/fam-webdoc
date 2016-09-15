'use strict';

const $ = require('jquery');
const _ = require('lodash');


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

                    const $v = $(visible);

                    $v.parent().animate({
                        scrollTop: visible.offsetTop
                    }, 500);
                }

            };

            $($panels.parent()).on('scroll.sequence', _.debounce(checkViewport, 50)).trigger('scroll.sequence');


            $('body').css('overflow', 'hidden');


            next();
        },
        after: function after(id, next) {
            const $root = app.config.$mountPoint;
            const $panels = $root.find('.panel');

            $('body').css('overflow', 'auto');
            $($panels.parent()).off('scroll.sequence');

            next();
        }
    };
};
