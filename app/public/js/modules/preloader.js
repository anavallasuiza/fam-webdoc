'use strict';

module.exports.preloadImages = (images, $preloadWidget) => {

    const total = images.length;
    let loaded = 0;

    const promises = images.map((i) => new Promise((resolve, reject) => {
        const image = new Image();
        image.src = i;

        image.onload = () => {
            loaded++;
            $preloadWidget.html(`${loaded} / ${total}`);
            return resolve(i);
        };

        image.onerror = (error) => reject(error);
    }));

    return Promise.all(promises);
};