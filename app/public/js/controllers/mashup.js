'use strict';

module.exports = (app) => {

    return {
        on: function on(next) {
            next();
        },
        after: function after(next) {
            next();
        }
    };
};