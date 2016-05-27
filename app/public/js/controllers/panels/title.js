'use strict';

module.exports = ($panel) => {
    let bgSound;
    const $bgSound = $panel.find('.bgsound');

    if ($bgSound.length) {
        bgSound = $bgSound.get(0);
    }

    return {
        on: () => {
            if (bgSound) {
                bgSound.volume = 0;
                bgSound.play();

                $bgSound.animate({ volume: 1 }, 1000);
            }
        },
        after: () => {
            if (bgSound) {
                $bgSound.animate({ volume: 0 }, 1000, () => bgSound.pause());

            }

        }
    };
};
