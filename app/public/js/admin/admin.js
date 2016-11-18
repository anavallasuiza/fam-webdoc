const $ = require('jquery');

$('button').on('click', (e) => {
    if(!confirm('Estás segura???')) {
        return false;
    }
});