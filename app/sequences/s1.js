'use strict';

const i18n = require('i18n');

const s1 = function(req) {

    return {
        id: 'sq1',

        adquired: [{
            type: 'title',
            text: i18n.__.call(req, 'La fam és una dona africana famèlica, amb molts fills, que no va a l’escola i no té cap feina, nascuda a un país sec, corrupte, estèril. Una imatge repetida infinites vegades que no ens deixa veure’n la resta.')
        }, {
            type: 'vff',
            height: 40000,
            video: 's1p1faf.mp4',
            audio: 's1p1faf.mp3',
            subtitles: `chimamanda_${i18n.__.call(req,'CURRENT_LANG')}.srt`
        }, {
            type: 'autoplay',
            video: 's1p2.mp4',
            subtitles: `telediarios_${i18n.__.call(req,'CURRENT_LANG')}.srt`,
            door: true
        }],
        missing: [
            {
                type: 'timeline',
                init: 1968,
                end: 2015,
                unknown: `unknown_${i18n.__.call(req,'CURRENT_LANG')}.srt`,
                pilger: `pilger_${i18n.__.call(req,'CURRENT_LANG')}.srt`,
                buerk: `buerk_${i18n.__.call(req,'CURRENT_LANG')}.srt`,
                bill:  `bill_${i18n.__.call(req,'CURRENT_LANG')}.srt`
            }, {
                type: 'end',
                text: i18n.__.call(req,'Tornar al mosaic'),
                terminal: 's1'

            }
        ]

    };

};

module.exports = s1;