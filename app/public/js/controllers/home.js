'use strict';

module.exports = (app) => {
    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;

            next();
        },
        after: function after(next) {
            next();
        }
    };
};