'use strict';

const Recorder = require('mediarecorder').Recorder;

let recorder;


module.exports = (app) => {

    return {
        on: function on(next) {

            const $root = app.config.$mountPoint;

            const $intro = $root.find('[data-intro]');
            const $introVideo = $intro.find('video');
            const pos = $root.find('.intro').data('where');

            window.ga('set', 'page', '/' + pos);
            window.ga('send', 'pageview');


            const $control = $root.find('[data-control]');
            const $controlUI = $control.find('[data-ui]');
            const $start = $control.find('[data-start]');
            const $controlVideo = $control.find('video');
            const $count = $control.find('.pre-record');
            const $bar = $root.find('[data-bar]');

            const $output = $root.find('[data-output]');
            const $outputVideo = $output.find('video');

            const preRecord = () => {
                let count = 3;
                let interval;
                $count.html('').removeClass('counting');

                return new Promise((resolve, reject) => {
                    interval = setInterval(() => {
                        if (count === 0) {
                            clearInterval(interval);
                            $count.html(count).addClass('counting');
                            return resolve();
                        }
                        $count.html(count);
                        count--;
                    }, 1000);
                });
            };


            //Init video
            $introVideo.on('ended', (e) => {
                if (app.hasVideo) {
                    $intro.addClass('is-hidden');
                } else {
                    app.router.setRoute(`/mashup/${pos}/anonymous`);
                }
            });

            if (app.hasVideo) {
                //Recorder control
                recorder = new Recorder($controlVideo, $outputVideo);

                recorder.init();


                $start.on('click', (e) => {
                    $controlUI.addClass('is-hidden');
                    preRecord().then(() => {
                        recorder.start();

                        $bar.addClass('recording');

                        setTimeout(() => {
                            $control.addClass('is-hidden');
                            $bar.removeClass('recording');
                            recorder.stop();
                        }, app.config.recordingTime);

                    });
                });

                //Recorder output

                $output.find('[data-play]').on('click', (e) => {
                    $outputVideo.get(0).play();
                });

                $output.find('[data-restart]').on('click', (e) => {
                    $outputVideo.get(0).pause();
                    recorder.startPreview();
                    recorder.clean();

                    $controlUI.removeClass('is-hidden');

                    $control.removeClass('is-hidden');
                });

                $output.find('[data-save]').on('click', (e) => {

                    app.models.uploadVideo(recorder.getData(), app.user, pos)
                        .done(data => {
                            app.router.setRoute(`/mashup/${pos}/${data.name}`);
                        })
                        .error(error => {
                            console.error(error);
                        });
                });

            }

            $introVideo.get(0).play();

            next();
        },
        after: function after(next) {
            if (app.hasVideo) {
                recorder.off();
            }

            next();
        }
    };
};
