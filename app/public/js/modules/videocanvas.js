'use strict';

class VideoCanvas {
    constructor(video, canvas, fontSize=296, hPos=40, text='F-A-M') {

        this.video = video;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.hPos = hPos;
        this.text = text;

        this.ctx.font = `bold ${fontSize}px Montserrat`;

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
        this.ctx.fillText(this.text, 60, this.canvas.height - this.hPos);
        this.ctx.globalCompositeOperation = 'source-in';
        this.ctx.drawImage(this.video, 0, 0);

        setTimeout(this.loop.bind(this), 1000 / 12);
        this.ctx.restore();
    }
}

module.exports = VideoCanvas;
