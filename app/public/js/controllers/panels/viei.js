'use strict';

const $ = require('jquery');
const PS = require('perfect-scrollbar');
const subtitles = require('subtitles');

module.exports = ($panel, app, door) => {
    let $currentContent;
    let opened = 0;

    let bgSound;
    const $bgSound = $panel.find('.bgsound');

    if ($bgSound.length) {
        bgSound = $bgSound.get(0);
    }

    const $bgVideo = $panel.find('.bgvideo');

    const subs = [];

    for (let media of $panel.find('video[data-subtitles], audio[data-subtitles]')) {
        const subtitleHandler = Object.create(subtitles.handler);
        subtitleHandler.init($(media), app.subtitleViewer);

        subs.push(subtitleHandler);
    }



    return {
        init: () => {
            const $points = $panel.find('.points li');


            for(const sub of subs) {
                sub.listen();
            }

            const hideCurrent = () => {
                $currentContent.addClass('is-hidden');
                for (let media of $currentContent.find('audio,video')) {
                    media.pause();
                }
            };

            const $media = $panel.find('>video, >img');

            if ($media.length) {
                const handlePoints = () => {
                    $panel.find('.points').css('height', $media.height());
                };

                $media.on('loadeddata', () => {
                    handlePoints();
                });


                $(window).on('resize.viei', handlePoints).trigger('resize');
            }

            $panel.on('click', () => {
                $currentContent && hideCurrent();
            });

            for (let point of $points) {
                const $point = $(point);

                const $spot = $point.find('img');
                const $content = $point.find('> div');
                const $textBlock = $point.find('p');

                if ($textBlock.length) {
                    PS.initialize($textBlock.get(0), {
                        suppressScrollX: true
                    });
                }

                const sizes = {
                    spotWidth: $spot.outerWidth(),
                    spotHeigth: $spot.outerHeight(),
                    contentWidth: $content.outerWidth(),
                    contentHeight: $content.outerHeight()
                };

                let [verticalAnchor, horizontalAnchor] = $content.data('anchor') ? $content.data('anchor').split(' ') : ['top', 'left'];

                if (verticalAnchor === 'top') {
                    $content.css('top', sizes.spotHeigth);
                } else if (verticalAnchor === 'bottom') {
                    $content.css('top', -sizes.contentHeight);
                }

                if (horizontalAnchor === 'left') {
                    $content.css('left', sizes.spotWidth);
                } else if (horizontalAnchor === 'right') {
                    $content.css('left', -sizes.contentWidth);
                }

                $content.on('click', (e) => {
                    e.stopPropagation();
                });

                $spot.on('click', (e) => {
                    $currentContent && hideCurrent();

                    $content.removeClass('is-hidden');
                    const $video = $content.find('video');
                    if($video.length) {
                        $video.get(0).play();
                    }
                    $currentContent = $content;
                    e.stopPropagation();
                });

            }
        },
        on: () => {
            opened = 0;
            if (bgSound) {
                bgSound.volume = 0;
                bgSound.play();

                $bgSound.animate({ volume: 1 }, 1000);
            }


            if($bgVideo.length) {
                $bgVideo.get(0).play();
            }

        },
        after: () => {
            if (bgSound) {
                $bgSound.animate({ volume: 0 }, 1000, () => bgSound.pause());

            }


            if($bgVideo.length) {
                $bgVideo.get(0).pause();
            }


            $(window).off('resize.viei');

            for(const sub of subs) {
                sub.destroy();
            }
        }
    };
};
