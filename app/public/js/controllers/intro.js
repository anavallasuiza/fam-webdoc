'use strict';

const Recorder = require('mediarecorder').Recorder;

let recorder;

module.exports = (app) => {

    return {
        on: function on(next) {

            const $root = app.config.$mountPoint;

            const $intro = $root.find('[data-intro]');
            const $introVideo = $intro.find('video');
            const $control = $root.find('[data-control]');
            const $controlVideo = $control.find('video');
            const $output = $root.find('[data-output]');
            const $outputVideo = $output.find('video');

            //Init video
            $introVideo.on('ended', (e) => {
                $intro.addClass('is-hidden');
            });

            //Recorder control
            recorder = new Recorder($controlVideo, $outputVideo);

            recorder.init();

            $control.find('[data-start]').on('click', (e) => {
                recorder.start();

                setTimeout(() => {
                    $control.addClass('is-hidden');
                    recorder.stop();
                }, app.config.recordingTime);
            });

            //Recorder output

            $output.find('[data-play]').on('click', (e) => {
                $outputVideo.get(0).play();
            });

            $output.find('[data-restart]').on('click', (e) => {
                $outputVideo.get(0).pause();
                recorder.startPreview();
                recorder.clean();

                $control.removeClass('is-hidden');
            });

            $output.find('[data-save]').on('click', (e) => {
                app.models.uploadVideo(recorder.getData(), app.user, 'intro')
                    .done(data => {
                        app.router.setRoute(`/mashup/intro/${data.name}`);
                    })
                    .error(error => {
                        console.error(error);
                    });
            });


            next();
        },
        after: function after(next) {
            recorder.off();
            next();
        }
    };
};