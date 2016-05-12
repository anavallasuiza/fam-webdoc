'use strict';

module.exports = (app) => {
    return {
        home: require('./home')(app),
        intro: require('./intro')(app),
        mosaic: require('./mosaic')(app),
        mashup: require('./mashup')(app),
        middlewares: {
            requireUserId: function(...args) {
                if(!app.user) {
                    location = '/';
                }

                args.pop()();
            }
        }
    };
};