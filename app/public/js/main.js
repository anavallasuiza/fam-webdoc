'use strict';

require('shared');
require('webrtc-adapter');

const $ = require('jquery');
const director = require('director');
const co = require('co');

const app = {
    config: {
        $mountPoint: $('[data-app]'),
        $preloadWidget: $('[data-preload]')
    }
};

const models = require('./models')(app);
const controllers = require('./controllers')(app);
const preloader = require('preloader');


const routes = {
    '/': {
        on: controllers.home.on,
        after: controllers.home.after
    },
    '/intro': {
        before: controllers.middlewares.requireUserId,
        on: controllers.intro.on,
        after: controllers.intro.after
    }
};

if(DEVELOPMENT) {
    window.app = app;
}

/**
 * Bootstrap
 */

const router = director.Router(routes);

router.configure({
    async: true,
    html5history: true,
    before: co.wrap(function* (next) {
        app.config.$mountPoint.addClass('is-hidden');

        const html = yield models.getPage('/' + router.getRoute());
        const images = $(html).find('img').map((n, i) => i.src).get();

        if (images.length) {
            app.config.$preloadWidget.removeClass('is-hidden');
            yield preloader.preloadImages(images, app.config.$preloadWidget);
            app.config.$preloadWidget.addClass('is-hidden');
        }


        setTimeout(() => {
            app.config.$mountPoint.html(html).removeClass('is-hidden');

            next();
        }, 400);
    })
});


router.init();

app.router = router;

/**
 * Handle internal nav
 */

$('body').on('click', 'a:not([data-external])', (e) => {
    router.setRoute($(e.currentTarget).attr('href'));
    e.preventDefault();
});