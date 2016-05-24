'use strict';

const i18n = require('i18n');

const s1 = {
    id: 'sq1',
    panels: [
        {
            type: 'title',
            text: i18n.__('Secuencia 1 title')
        },
        {
            type: 'autoplay',
            video: 'sample.mp4'
        },
        {
            type: 'vff',
            height: 3000,
            video: 'sample.mp4'
        },
        {
            type: 'viei',
            image: '6.jpg',
            points: [
                {
                    top: '20%',
                    left: '30%',
                    text: 'lorem ipsum 1'
                },
                {
                    top: '35%',
                    left: '50%',
                    text: 'lorem ipsum 2'
                },
                {
                    top: '65%',
                    left: '80%',
                    text: 'lorem ipsum 3'
                }
            ]
        }
    ]
};

module.exports = s1;
