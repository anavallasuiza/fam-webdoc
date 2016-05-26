'use strict';

const $ = require('jquery');

module.exports = ($panel) => {
    let $currentContent;

    return {
        init: () => {
            const $points = $panel.find('.points li');

            const hideCurrent = () => {
                $currentContent.addClass('is-hidden');
                for (let media of $currentContent.find('audio,video')) {
                    media.pause();
                }
            };

            $panel.on('click', (e) => {
                $currentContent && hideCurrent();
            });

            for (let point of $points) {
                const $point = $(point);

                const $spot = $point.find('img');
                const $content = $point.find('> div');

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
                    $currentContent = $content;
                    e.stopPropagation();
                });

            }
        }
    };
};