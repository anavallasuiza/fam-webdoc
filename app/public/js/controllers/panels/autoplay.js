'use strict';

module.exports = ($panel) => {
    const $video = $panel.find('video');
    return {
        on: () => {
            $video.get(0).play();
        },
        after: () => {
            $video.get(0).pause();
        }
    };
};
