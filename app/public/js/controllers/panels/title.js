'use strict';

module.exports = ($panel, app, door) => {
    let audio;
    const $audio = $panel.find('audio');
    const $terminal = $panel.find('a[data-terminal]');

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

            if($panel.is('[data-door]')) {
                door.show();
            }


            $terminal.on('click', (e) => {
                e.preventDefault();
                const sq = $terminal.data('terminal');

                if (!app.sequences[sq].done) {
                    app.sequences[sq].done = true;
                }

                app.router.setRoute($terminal.attr('href'));


            });


        },
        after: () => {
            if (audio) {
                $audio.animate({ volume: 0 }, 1000, () => audio.pause());

            }

            $terminal.off('click');

        }
    };
};
