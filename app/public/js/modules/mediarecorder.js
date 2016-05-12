/* global MediaRecorder */
'use strict';

class Recorder {
    constructor($control, $output, api, name, dest) {
        this.control = $control.get(0);
        this.output = $output.get(0);

        this.api = api;
        this.name = name;
        this.dest = dest;

        this.chunks = [];
    }

    init() {
        requestPermission()
            .then((stream) => {
                this.stream = stream;
                this.recorder = new MediaRecorder(this.stream, {
                    audioBitsPerSecond: 64000,
                    videoBitsPerSecond: 500000,
                    mimeType: 'video/webm'
                });

                this.recorder.ondataavailable = (e) => {
                    this.chunks.push(e.data);
                };

                this.recorder.onstop = (e) => {
                    this._end();
                };

                this.startPreview();
            });
        //TODO: Catch!
        return this;
    }

    startPreview() {
        this.control.src = URL.createObjectURL(this.stream);
        this.control.volume = 0;
        this.control.play();
        return this;
    }

    stopPreview() {
        this.control.pause();
        return this;
    }

    start() {
        if (this.recorder.state !== 'recording') {
            this.recorder.start();
        }
        return this;
    }

    stop() {
        this.recorder.stop();
        return this;
    }


    off() {
        for (let stream of this.stream.getTracks()) {
            stream.stop();
        }

        return this;
    }

    clean() {
        this.chunks = [];
        this.output.pause();
        this.output.currentTime = 0;
        return this;
    }

    getData() {
        return this.blob;
    }

    _end() {
        this.blob = new Blob(this.chunks, {
            type: 'video/webm'
        });

        this.output.src = URL.createObjectURL(this.blob);
    }

}


const requestPermission = () => {
    return navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
            width: 640,
            height: 360
        }
    });
};

module.exports = {
    requestPermission,
    Recorder
};