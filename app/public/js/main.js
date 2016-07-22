'use strict';

require('shared');
require('webrtc-adapter');

const $ = require('jquery');
const director = require('director');
const co = require('co');

const app = {
    config: {
        $mountPoint: $('[data-app]'),
        $preloadWidget: $('[data-preloader]'),
        recordingTime: 10 * 1000
    },
    hasVideo: navigator.mediaDevices,
    helpers: require('helpers')
};

const models = require('./models')(app);
const controllers = require('./controllers')(app);
const preloader = require('preloader');

const routes = {
    '/': {
        on: controllers.home.on,
        after: controllers.home.after
    },
    '/start': {
        on: controllers.start.on,
        after: controllers.start.after
    },
    '/intro': {
        before: controllers.middlewares.requireUserId,
        on: controllers.intro.on,
        after: controllers.intro.after
    },
    '/mashup/:where/:uuid': {
        before: controllers.middlewares.requireUserId,
        on: controllers.mashup.on,
        after: controllers.mashup.after
    },
    '/hub': {
        before: controllers.middlewares.requireUserId,
        on: controllers.hub.on,
        after: controllers.hub.after
    },
    '/sequence/:id': {
        before: controllers.middlewares.requireUserId,
        on: controllers.sequence.on,
        after: controllers.sequence.after
    }
};

if (DEVELOPMENT) {
    window.app = app;
}

/**
 * Bootstrap router
 */

const router = director.Router(routes);

router.configure({
    async: true,
    html5history: true,
    before: co.wrap(function* before(...args) {
        const next = args.pop();

        app.config.$mountPoint.addClass('is-hidden');

        const html = yield models.getPage('/' + router.getRoute().join('/'));

        const media = [
            ...$(html).find('img').map((n, i) => ({
                type: 'image',
                src: i.src
            })).get(),
            ...$(html).find('video[data-preload]').map((n, i) => ({
                type: 'video',
                src: i.src
            })).get()
        ];


        if (media.length) {
            app.config.$preloadWidget.removeClass('is-hidden');
            yield preloader.preloadMedia(media, app.config.$preloadWidget);
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
app.models = models;
app.controllers = controllers;

/**
 * Handle internal nav
 */

$('body').on('click', 'a:not([data-external])', (e) => {
    router.setRoute($(e.currentTarget).attr('href'));
    e.preventDefault();
});
