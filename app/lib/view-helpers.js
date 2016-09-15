'use strict';

const config = require('../../config/');
const fs = require('fs');
const path = require('path');
const i18n = require('i18n');
const srtParser = require('subtitles-parser');

module.exports = {
    __: function() {
        return i18n.__.apply(this, arguments);
    },
    __n: function() {
        return i18n.__n.apply(this, arguments);
    },
    isPanelType: function(panel, type) {
        return panel === type;
    },
    parseSRT: function(file) {
        if(file) {
            return JSON.stringify(srtParser.fromSrt(fs.readFileSync(path.join(config.subtitles, file), 'utf8'), true));
        }
    }
};