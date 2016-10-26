const path = require('path');
const fs = require('fs');

const config = require('../../config/');

module.exports.get = function() {
    return new Promise((resolve, reject) => {
        const introDir = path.join(config.uploads, 'intro');
        const outroDir = path.join(config.uploads, 'outro');
        const videos = new Map();

        fs.readdir(introDir, (error, files) => {
            for (const file of files) {
                videos.set(file, {
                    intro: file,
                    name: file.split('-')[1]
                });
            }

            fs.readdir(outroDir, (error, files) => {
                for(const file of files) {
                    if(videos.has(file)) {
                        videos.get(file).outro = file;
                    } else {
                        videos.set(file, {
                            outro: file,
                            name: file.split('-')[1]
                        });
                    }
                }

                resolve(videos.values());

            });


        });

    });
};
