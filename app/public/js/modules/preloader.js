'use strict';

module.exports.preloadMedia = (media, $preloadWidget) => {

    const total = media.length;
    let loaded = 0;


    const promises = media.map((i) => new Promise((resolve, reject) => {
        if (i.type === 'image') {
            const image = new Image();

            image.onload = () => {
                loaded++;
                $preloadWidget.html(`${loaded} / ${total}`);
                return resolve(i);
            };

            image.onerror = (error) => reject(error);
            image.src = i.src;

        } else if (i.type === 'video') {
            const video = document.createElement('video');

            video.oncanplaythrough = () => {
                loaded++;
                $preloadWidget.html(`${loaded} / ${total}`);
                return resolve(i);
            };

            video.onerror = (error) => reject(error);
            video.src = i.src;
        }
    }));

    return Promise.all(promises);
};