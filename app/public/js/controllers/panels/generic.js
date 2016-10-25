'use strict';

module.exports = ($panel, app) => {
    const $action = $panel.find('.action');
    return {
        init: () => {
            $action.on('click', () => {
                $panel.toggleClass('active');
            });
        },
        on: () => {

        },
        after: () => {}
    };
};
