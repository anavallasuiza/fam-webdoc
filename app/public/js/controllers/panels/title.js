'use strict';

module.exports = ($panel) => {
    let audio;
    const $audio = $panel.find('audio');

    if ($audio.length) {
        audio = $audio.get(0);
    }

    return {
        on: () => {
            if (audio) {
                audio.volume = 0;
                audio.play();

                $audio.animate({ volume: 1 }, 1000);
            }
        },
        after: () => {
            if (audio) {
                $audio.animate({ volume: 0 }, 1000, () => audio.pause());

            }

        }
    };
};
