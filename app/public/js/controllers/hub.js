'use strict';
const $ = require('jquery');
const $window = $(window);

module.exports = (app) => {

    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;
            const height = $window.height() - 150;

            const $parts = $root.find('.part:not(.done)');
            const $alternates = $root.find('.part.done');
            let canPass = false;

            //Update classes
            for (let [name, sq] of Object.entries(app.sequences)) {
                const $a = $root.find(`[data-${name}]`);

                if (sq.done) {
                    canPass = true;
                    $a.addClass(name);
                    $a.find('.a').removeClass('active').hide();
                    $a.find('.f').addClass('active').show().data('alternate', name);
                }
            }

            if(canPass) {
                $root.find('.go').removeClass('is-hidden');
            }


            const $titles = $root.find('.title div.active span');

            //Adjust heights
            $titles.css({
                'line-height': Math.floor(height / 10) + 'px'
            });

            const windowWidth = $window.width();
            const bounce = 1;

            let timeout;

            const show = (n) => {
                //Titles
                $titles.removeClass('visible');
                $titles.eq(n).addClass('visible');

                //Image
                $parts.removeClass('visible');
                $alternates.removeClass('visible');

                if ($titles.eq(n).parent().is('.f')) {
                    $root.find('.panel').find('.' + $titles.eq(n).parent().data('alternate')).addClass('visible');
                } else {
                    $parts.eq(n).addClass('visible');
                }
            };

            $window.on('mousemove.fam', e => {
                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    const n = Math.floor((e.originalEvent.clientX * $parts.length) / windowWidth);
                    show(n);
                }, bounce);

            });

            show(0);
            next();
        },
        after: function after(next) {
            $window.off('mousemove.fam');
            next();
        }
    };
};