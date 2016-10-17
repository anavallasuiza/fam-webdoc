'use strict';

const config = require('../../config/');
const fs = require('fs');
const path = require('path');
const srtParser = require('subtitles-parser');

module.exports = {
    isPanelType: function(panel, type) {
        return panel === type;
    },
    parseSRT: function(file) {
        if (file) {
            return JSON.stringify(srtParser.fromSrt(fs.readFileSync(path.join(config.subtitles, file), 'utf8'), true));
        }
    }
};
