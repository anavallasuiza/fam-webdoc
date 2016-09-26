'use strict';

const i18n = require('i18n');

const s1 = {
    id: 'sq1',

    adquired: [{
        type: 'title',
        text: i18n.__('El hambre es una mujer africana hambrienta, con muchos hijos, que no va a la escuela y no tiene trabajo, nacida en un país seco, corrupto, estéril. Una imagen repetida infinitas veces que no nos deja ver el resto.')
    }, {
        type: 'vff',
        height: 40000,
        video: 's1p1faf.mp4',
        audio: 's1p1faf.mp3'
    }, {
        type: 'autoplay',
        video: 's1p2.mp4',
        subtitles: i18n.__('telediarios_cas.srt'),
        door: true
    }],
    missing: [

        {
            type: 'timeline',
            init: 1968,
            end: 2015,
            unknown: i18n.__('unknown_cas.srt'),
            pilger: i18n.__('pilger_cas.srt'),
            buerk: i18n.__('buerk_cas.srt'),
            bill:  i18n.__('bill_cas.srt')
        }, {
            type: 'title',
            text: i18n.__('Volver al mosaico'),
            terminal: 's1'

        }
    ]

};

/*, {
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
    }*/



module.exports = s1;
