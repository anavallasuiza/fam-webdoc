'use strict';

module.exports = (app) => {

    return {
        on: function on(id, next) {

            next();
        },
        after: function after(id, next) {
            next();
        }
    };
};
