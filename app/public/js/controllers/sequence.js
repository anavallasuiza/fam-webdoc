'use strict';

const $ = require('jquery');
require('jquery-scrollify');

module.exports = (app) => {

    return {
        on: function on(id, next) {
            const $root = app.config.$mountPoint;

            const $panels = $root.find('.panel');
            let $current;

            //Control generic sequence features:
            // - autoplay ✓
            // - vff ✓
            // - viei
            //Also:
            // - sequence length (px)
            // - store sequence viewed percent (localStorage)
            // - fade panels sound

            const genericPanelsHandlers = {
                autoplay: require('./panels/autoplay'),
                vff: require('./panels/vff')
            };

            $.scrollify({
                section: $panels,
                setHeights: false,
                sectionName: false,
                after: (index) => {
                    if ($current) {
                        const handler = genericPanelsHandlers[$current.data('type')];
                        handler && handler($current).after();
                    }

                    const handler = genericPanelsHandlers[$.scrollify.current().data('type')];

                    handler && handler($.scrollify.current()).on();

                    $current = $.scrollify.current();
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
