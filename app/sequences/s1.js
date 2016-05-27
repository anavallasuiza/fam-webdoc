'use strict';

const i18n = require('i18n');

const s1 = {
    id: 'sq1',

    panels: [{
        type: 'autoplay',
        video: 'sample.mp4'
    }, {
        type: 'viei',
        bgsound: 'music.mp3',
        image: '7.jpg',
        icon: {
            file: 'star.svg',
            width: 60,
            height: 60
        },
        points: [{
            top: '20%',
            left: '30%',
            class: 'small',
            anchor: 'top left',
            content: {
                title: 'The lorem ipsum',
                img: 'thumb.png',
                text: 'lorem ipsum 1lorem ipsum 1lorem ipsum 1lorem ipsum 1lorem ipsum 1',
                audio: 'music.mp3'
            }
        }, {
            top: '40%',
            left: '60%',
            class: 'small',
            anchor: 'top right',
            content: {
                title: 'The lorem ipsum',
                audio: 'music.mp3'
            }
        }]
    }, {
        type: 'title',
        text: i18n.__('Secuencia 1 title'),
        bgsound: 'music.mp3'
    }, {
        type: 'vff',
        height: 10000,
        video: 'sample.mp4'
    }]
};

module.exports = s1;
