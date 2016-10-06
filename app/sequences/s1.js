'use strict';

const i18n = require('i18n');

const s1 = function(locale) {

    i18n.setLocale(locale);

    return {
        id: 'sq1',

        adquired: [{
            type: 'title',
            text: i18n.__('La fam és una dona africana famèlica, amb molts fills, que no va a l’escola i no té cap feina, nascuda a un país sec, corrupte, estèril. Una imatge repetida infinites vegades que no ens deixa veure’n la resta.')
        }, {
            type: 'vff',
            height: 40000,
            video: 's1p1faf.mp4',
            audio: 's1p1faf.mp3',
            subtitles: `chimamanda_${i18n.__('CURRENT_LANG')}.srt`
        }, {
            type: 'autoplay',
            video: 's1p2.mp4',
            subtitles: `telediarios_${i18n.__('CURRENT_LANG')}.srt`,
            door: true
        }],
        missing: [
            {
                type: 'timeline',
                init: 1968,
                end: 2015,
                unknown: `unknown_${i18n.__('CURRENT_LANG')}.srt`,
                pilger: `pilger_${i18n.__('CURRENT_LANG')}.srt`,
                buerk: `buerk_${i18n.__('CURRENT_LANG')}.srt`,
                bill:  `bill_${i18n.__('CURRENT_LANG')}.srt`
            }, {
                type: 'title',
                text: i18n.__('Tornar al mosaic'),
                terminal: 's1'

            }
        ]

    };

};

module.exports = s1;

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