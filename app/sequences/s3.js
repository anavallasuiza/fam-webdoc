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
            image: 'avion.jpg',
            points: [{
                top: '37%',
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
                        subtitles: `ong_${i18n.__.call(req,'CURRENT_LANG')}.srt`
                    }
                }
            }, {
                top: '47%',
                left: '37%',
                icon: {
                    file: 'eye.png',
                    width: 112,
                    height: 118,
                    offset: -56
                },
                class: 'big',
                anchor: 'bottom left',
                borderPoint: true,
                content: {
                    video: {
                        src: 'wfp.mp4',
                        subtitles: `wfp_${i18n.__.call(req,'CURRENT_LANG')}.srt`
                    }
                }
            }, {
                top: '70%',
                left: '55%',
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
                        subtitles: `give_${i18n.__.call(req,'CURRENT_LANG')}.srt`
                    }
                }
            }]
        }, {
            type: 'title',
            text: i18n.__.call(req, '¿Comprar soluciones? Entender.'),
        }, {
            type: 'title',
            text: i18n.__.call(req, 'Será muy difícil encontrar una solución humanitaria a un problema político.'),
            door: true
        }],
        missing: [{
            type: 'autoplay',
            video: 'sankara.mp4',
            subtitles: `sankara_${i18n.__.call(req,'CURRENT_LANG')}.srt`
        }, {
            type: 'title',
            text: i18n.__.call(req, 'La deuda y la intervención de las grandes economías son una herramienta de dominación del presente. Descolonizar el hambre.'),
        }, {
            type: 'autoplay',
            video: 'especulacion.mp4',
            subtitles: `esp_${i18n.__.call(req,'CURRENT_LANG')}.srt`
        }, {
            type: 'title',
            text: i18n.__.call(req, 'Especular. Jugar. Hambre.'),
        }, {
            type: 'generic',
            html: '<iframe src="https://www.google.com/maps/d/embed?mid=1vV9D2270BCtexhfE-ufLAP1Pc7o" width="640" height="480"></iframe>',
        }, {
            type: 'title',
            text: i18n.__.call(req, 'Una tierra comprada, un alimento que se va.'),
        }, {
            type: 'autoplay',
            video: 'recursos.mp4',
            subtitles: `rec_${i18n.__.call(req,'CURRENT_LANG')}.srt`
        }, {
            type: 'title',
            text: i18n.__.call(req, 'El precio (no pagado) de los recursos naturales son personas empujadas a la nada. Expolio.'),
        }, {
            type: 'autoplay',
            video: 'revoltes.mp4',
            subtitles: `rev_${i18n.__.call(req,'CURRENT_LANG')}.srt`
        }, {
            type: 'title',
            text: i18n.__.call(req, 'Ellos luchan. Nosotros luchamos.'),
        }, {
            type: 'end',
            text: i18n.__.call(req, 'Tornar al mosaic'),
            terminal: 's3'

        }]

    };

};

module.exports = s1;
