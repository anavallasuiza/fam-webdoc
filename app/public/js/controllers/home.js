'use strict';

module.exports = (app) => {
    return {
        on: function on(next) {
            console.log('entering home');
        },
        after: function after(next) {
            console.log('exiting home');
            next();
        }
    };
};