const path = require('path');
const fs = require('fs');

const config = require('../../config/');

//TODO filter async
function fileExists(path) {
    return new Promise((resolve, reject) => {
        fs.acces(path, fs.constans.F_OK, (error) => {
            if (error) {
                return resolve(false);
            }

            resolve(true);
        });
    });
}

module.exports.get = function() {
    return new Promise((resolve, reject) => {
        const introDir = path.join(config.uploads, 'intro');
        const outroDir = path.join(config.uploads, 'outro');

        fs.readdir(introDir, (error, files) => {
            const paired = files.filter((file) => {
                return fs.existsSync(path.join(outroDir, file));
            });

            resolve(paired);
        });

    });
};
