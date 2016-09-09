'use strict';


module.exports = ($panel) => {
    const $handler = $panel.find('.handler');

    return {
        init: () => {

        },
        on: () => {
            $handler.css('position', 'fixed');
        },
        after: () => {
            $handler.css('position', 'absolute');

        }
    };
};
