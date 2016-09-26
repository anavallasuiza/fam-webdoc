'use strict';
const $ = require('jquery');
const inView = require('in-view');

function range(v, range1, range2) {
    return (v - range1[0]) * (range2[1] - range2[0]) / (range1[1] - range1[0]) + range2[0];
}

module.exports = ($panel, app, door) => {
    const $handler = $panel.find('.handler');
    const $slider = $handler.find('.slider');
    const $scrubber = $slider.find('.scrubber');
    const $images = $panel.find('img');
    const subtitles = require('subtitles');

    const subs = [];

    for(let media of $panel.find('video, audio')) {
        const subtitleHandler = Object.create(subtitles.handler);
        subtitleHandler.init($(media), app.subtitleViewer);

        subs.push(subtitleHandler);
    }

    const contentOffset = $panel.offset().top;
    const contentHeight = $images.toArray().reduce((previous, current) => previous + $(current).outerHeight(), 0);
    const sliderHeight = $slider.outerHeight();
    const $parent = $panel.parent();

    let scrollSpy;
    let playingMedia;

    const bottom = contentOffset + contentHeight - $images.last().outerHeight() - $scrubber.outerHeight();

    // TODO: update with better module
    inView('.timeline img').on('enter', function(img) {
        const $img = $(img);

        if($images.index($img) > 0) {
            door.hide();
        } else {
            door.show();
        }

        const $media = $img.parent().find('video, audio');

        if($media.length) {
            playingMedia && playingMedia.pause();
            $media.get(0).play();
            playingMedia = $media.get(0);
        }

        if ($img.data('year')) {
            $scrubber.find('.text').text($img.data('year'));
        }
    });

    return {
        on: () => {
            subs.forEach((sub) => sub.listen());

            const positionHandler = () => {
                const pos = $parent.scrollTop();

                if (pos >= contentOffset && pos <= bottom) {
                    const scruberPosition = range(pos, [contentOffset, bottom], [0, sliderHeight]);
                    $scrubber.css('top', Math.floor(scruberPosition));
                }
            };

            scrollSpy = setInterval(positionHandler, 50);

            $scrubber.css('top', '0px');

        },
        after: () => {
            playingMedia && playingMedia.pause();
            clearInterval(scrollSpy);
            subs.forEach((sub) => sub.destroy());
        }
    };
};
