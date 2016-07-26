'use strict';

const $ = require('jquery');
window.$ = window.jQuery = $;

require('jquery-scrollify');

module.exports = (app) => {

    return {
        on: function on(id, next) {
            const $root = app.config.$mountPoint;

            const $panels = $root.find('.panel');
            let current = -1;

            //Panel handlers
            const handlers = $panels.map((i, panel) => {
                const $panel = $(panel);
                const handler = require(`./panels/${$panel.data('type')}`)($panel);

                //Init panel if necessary
                handler.init && handler.init();

                return handler;
            }).get();


            $.scrollify({
                section: $panels,
                setHeights: false,
                sectionName: false,
                after: (index) => {
                    if (current > -1) {
                        handlers[current].after && handlers[current].after();
                    }

                    handlers[index].on && handlers[index].on();

                    current = index;
                }
            });

            next();
        },
        after: function after(id, next) {
            $.scrollify.destroy();

            next();
        }
    };
};
