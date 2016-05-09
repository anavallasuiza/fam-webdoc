'use strict';

module.exports = (app) => {
    return {
        home: require('./home')(app),
        intro: require('./intro')(app)
    };
};