'use strict';

module.exports = (app) => {
    return {
        home: require('./home')(app),
        intro: require('./intro')(app),
        mashup: require('./mashup')(app),
        mosaic: require('./mosaic')(app),
        middlewares: {
            requireUserId: function(next) {
                if(!app.user) {
                    location = '/';
                }

                next();
            }
        }
    };
};