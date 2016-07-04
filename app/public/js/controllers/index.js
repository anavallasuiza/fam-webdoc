'use strict';

module.exports = (app) => {
    return {
        home: require('./home')(app),
        start: require('./start')(app),
        intro: require('./intro')(app),
        mashup: require('./mashup')(app),
        hub: require('./hub')(app),
        sequence: require('./sequence')(app),
        middlewares: {
            requireUserId: function(...args) {
                if (!app.user) {
                    window.location = '/';
                }

                args.pop()();
            }
        }
    };
};
