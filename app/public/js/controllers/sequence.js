'use strict';

module.exports = (app) => {

    return {
        on: function on(id, next) {
            const $root = app.config.$mountPoint;

            //Control generic sequence features:
            // - autoplay
            // - vff
            // - viei
            //Also:
            // - sequence length (px)
            // - store sequence viewed percent (localStorage)
            // - fade panels sound


            next();
        },
        after: function after(id, next) {
            next();
        }
    };
};
