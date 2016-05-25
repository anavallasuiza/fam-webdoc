'use strict';

module.exports = (app) => {

    return {
        on: function on(id, next) {
            const $root = app.config.$mountPoint;

            next();
        },
        after: function after(id, next) {
            next();
        }
    };
};
