'use strict';

require('shared');
require('webrtc-adapter');

const director = require('director');
const co = require('co');

const app = {
    config: {
        $mountPoint: $('[data-app]')
    }
};

const models = require('./models')(app);
const controllers = require('./controllers')(app);

const routes = {
    '/': {
        on: controllers.home.on,
        after: controllers.home.after
    },
    '/intro': {
        on: controllers.intro.on,
        after: controllers.intro.after
    }
};

/**
 * Bootstrap
 */

const router = director.Router(routes);

router.configure({
    async: true,
    html5history: true,
    before: co.wrap(function* (next) {
        const html = yield models.getPage('/' + router.getRoute());
        //get images
        //preload images
        //preload videos? https://www.safaribooksonline.com/library/view/html5-canvas/9781449308032/ch06s04.html
        app.config.$mountPoint.html(html);
        next();
    })
});


router.init();

/**
 * Handle internal nav
 */

$('body').on('click', 'a:not([data-external])', (e) => {
    router.setRoute($(e.currentTarget).attr('href'));
    e.preventDefault();
});