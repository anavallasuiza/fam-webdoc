'use strict';
const $ = require('jquery');
const $window = $(window);

module.exports = (app) => {

    return {
        on: function on(next) {
            const $root = app.config.$mountPoint;
            const height = $window.height();

            const $parts = $root.find('.part');
            const $titles = $root.find('.title span');

            //Update classes
            for (let [name, sq] of Object.entries(app.sequences)) {
                const $a = $root.find(`[data-${name}]`);
                if (sq.done) {
                    $a.addClass(name);

                    if (sq.fresh) {
                        $a.addClass('fresh');
                        sq.fresh = false;
                    }
                }

            }


            //Adjust heights
            $titles.css({
                'line-height': Math.floor(height / 10) + 'px'
            });

            const windowWidth = $window.width();
            const bounce = 1;

            let timeout;

            const show = (n) => {
                //Image
                $parts.removeClass('visible');
                $parts.eq(n).addClass('visible');

                //Titles
                $titles.removeClass('visible');
                $titles.eq(n).addClass('visible');
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
