'use strict';

const path = require('path');
const fs = require('fs');

const _ = require('lodash');
const config = require('../../config/');

module.exports.select = (uuid, where) => {
    return new Promise((resolve, reject) => {
        const dir = path.join(config.uploads, where);

        fs.readdir(dir, (error, files) => {
            if (error) {
                return reject(error);
            }

            let possible;

            if(uuid === 'anonymous') {
                possible = files.filter(f => !f.startsWith('.')).slice(0, config.sampleVideos);
            } else {
                const userFile = `${uuid}.webm`;
                possible = files.filter(f => (f !== userFile && !f.startsWith('.'))).slice(0, config.sampleVideos);
                possible.push(userFile);
            }

            return resolve(_.shuffle(possible));
        });

    });
};
