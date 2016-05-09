'use strict';

module.exports = (app) => {
    return {
        getPage(url) {
            return $.get(url);
        }
    };
};