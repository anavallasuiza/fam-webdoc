'use strict';

const $ = require('jquery');

module.exports.preloadMedia = (media, $preloadWidget) => {

    const $bar = $preloadWidget.find('[data-bar]');
    const total = media.length;
    let loaded = 0;

    const promises = media.map((i) => new Promise((resolve, reject) => {
        if (i.type === 'image') {
            let $image = $('<img>');

            //TODO: move to function

            $image.on('load', () => {
                loaded++;
                $bar.css({
                    width: parseInt((loaded * 100) / total) + '%'
                });
                return resolve(i);
            });

            $image.on('error', (error) => reject(error));
            $image.attr('src', i.src);

            $image = null;

        } else if (i.type === 'video' || i.type === 'audio') {
            let $media = i.type === 'video' ? $('<video>') : $('audio');

            //TODO: move to function
            $media.on('canplaythrough', () => {
                loaded++;

                $bar.css({
                    width: parseInt((loaded * 100) / total) + '%'
                });

                return resolve(i);
            });

            $media.on('error stalled', (error) => {
                reject(error);
            });

            $media.attr({
                preload: 'auto',
                src: i.src,
                controls: 'controls'
            });

            $media = null;
        }
    }));

    //TODO: all promises must be resolved
    return Promise.all(promises);
};