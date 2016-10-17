/* eslint-disable quotes*/
'use strict';

const i18n = require('i18n');
const s1 = function(req) {

    return {
        id: 'sq1',

        adquired: [{
            type: 'title',
            text: i18n.__.call(req, 'Demanar diners, enviar ajuda, demanar diners, demanar ajuda… Un cicle infinit en el qual mai entenem què falla. ONGS i ciutadania en un circuit tancat, on les coses milloren per tornar a empitjorar. Política.')
        }, {
            type: 'viei',
            door: true,
            image: 'avion.jpg',
            points: [{
                top: '47%',
                left: '67%',
                icon: {
                    file: 'eye.png',
                    width: 112,
                    height: 118,
                    offset: -56
                },
                class: 'big',
                anchor: 'bottom right',
                borderPoint: true,
                content: {
                    video: {
                        src: 'ong.mp4',
                        // subtitles: 'foo.srt'
                    }
                }
            }, {
                top: '57%',
                left: '37%',
                icon: {
                    file: 'eye.png',
                    width: 112,
                    height: 118,
                    offset: -56
                },
                class: 'big',
                anchor: 'bottom right',
                borderPoint: true,
                content: {
                    video: {
                        src: 'wfp.mp4',
                        // subtitles: 'foo.srt'
                    }
                }
            }, {
                top: '82%',
                left: '54%',
                icon: {
                    file: `donate_${i18n.__.call(req,'CURRENT_LANG')}.png`,
                    width: 527,
                    height: 108,
                    offset: -56
                },
                class: 'big',
                anchor: 'bottom right',
                borderPoint: true,
                content: {
                    video: {
                        src: 'givemethemoney.mp4',
                        // subtitles: 'foo.srt'
                    }
                }
            }]
        }],
        missing: [
            {
                type: 'autoplay',
                video: 'sankara.mp4',
            },{
                type: 'autoplay',
                video: 'especulacion.mp4',
            },{
                type: 'generic',
                html: '<iframe src="https://www.google.com/maps/d/embed?mid=1vV9D2270BCtexhfE-ufLAP1Pc7o" width="640" height="480"></iframe>',
            },{
                type: 'autoplay',
                video: 'recursos.mp4',
            },{
                type: 'autoplay',
                video: 'revoltes.mp4',
            }, {
                type: 'title',
                text: i18n.__.call(req, 'Tornar al mosaic'),
                terminal: 's3'

            }
        ]

    };

};

module.exports = s1;
