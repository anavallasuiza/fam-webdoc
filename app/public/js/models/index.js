'use strict';

const $ = require('jquery');

module.exports = (app) => {
    return {
        getPage(url) {
            return $.get(url);
        },
        uploadVideo(blob, name, dest) {
            const data = new FormData();
            data.append('name', name);
            data.append('dest', dest);
            data.append('video', blob);

            return $.ajax({
                url: '/upload',
                data,
                method: 'POST',
                processData: false,
                contentType: false
            });

        }
    };
};