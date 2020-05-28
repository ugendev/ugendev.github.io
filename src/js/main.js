require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener("DOMContentLoaded", function() {

    const rotateCards       = require("../blocks/portfolio/__items/portfolio__items"),
          switchContent     = require("../blocks/our-team/__cards/our-team__cards"); 

    rotateCards();
    switchContent();
});



