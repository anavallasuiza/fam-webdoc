'use strict';

const i18n = require('i18n');

module.exports = {
    __: function() {
        return i18n.__.apply(this, arguments);
    },
    __n: function() {
        return i18n.__n.apply(this, arguments);
    },
    isPanelType: function(panel, type) {
        return panel === type;
    }
};