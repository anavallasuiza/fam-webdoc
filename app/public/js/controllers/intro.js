'use strict';

module.exports = (app) => {

    return {
        on: function on(next) {
            console.log('intro');
            next();
        },
        after: function after(next) {
            console.log('exit intro');
            next();
        }
    };
};