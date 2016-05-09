'use strict';

module.exports = (app) => {

    return {
        on: function on() {
        },
        after: function after(next) {
            next();
        }
    };
};