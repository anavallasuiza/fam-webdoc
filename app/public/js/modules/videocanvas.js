'use strict';

class VideoCanvas {
    constructor(video, canvas) {

        this.video = video;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.ctx.font = 'bold 296px Montserrat';

        this.video.addEventListener('play', () => {
            this.loop();
        });
    }

    start() {

        this.video.play();
    }

    loop() {
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillText('F-A-M', 60, this.canvas.height - 40);
        this.ctx.globalCompositeOperation = 'source-in';
        this.ctx.drawImage(this.video, 0, 0);

        setTimeout(this.loop.bind(this), 1000 / 24);
        this.ctx.restore();
    }
}

module.exports = VideoCanvas;
