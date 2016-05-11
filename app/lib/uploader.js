'use strict';
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const config = require('../../config/');

module.exports.upload = (folder, name, data) => {
    return new Promise((resolve, reject) => {
        const dest = path.join(config.uploads, folder);

        mkdirp.sync(dest);

        fs.writeFile(path.join(dest, `${name}.webm`), data, (error) => {
            if (error) {
                return reject(error);
            }

            return resolve(name);
        });
    });
};