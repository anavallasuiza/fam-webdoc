'use strict';

class VideoCanvas {
    constructor(video, canvas) {

        this.video = video;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.ctx.font = '296px Montserrat';

        this.video.addEventListener('play', () => {
            this.loop();
        });
    }

    start() {

        this.video.play();
    }

    loop() {

        this.ctx.fillText('F-A-M', 24, this.canvas.height - 24);
        this.ctx.globalCompositeOperation = 'source-in';

        this.ctx.drawImage(this.video, 0, 0);

        setTimeout(this.loop.bind(this), 1000 / 24);
    }
}

module.exports = VideoCanvas;
