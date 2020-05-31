require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener("DOMContentLoaded", function() {

    const 
        rotateCards       = require("../blocks/portfolio/__items/portfolio__items"),
        switchContent     = require("../blocks/our-team/__cards/our-team__cards"),
        slider            = require("../blocks/testimonials/__slider/testimonials__slider"),
        blog              = require("../blocks/blog/__posts/blog__posts"),
        menu              = require("../blocks/header/__menu/header__menu"),
        toPortfolio       = require("../blocks/main/__button/main__button"),
        statistics        = require("../blocks/stats/stats"),
        playVideo         = require("../blocks/awesomeness/awesomeness"),
        sendForm          = require("../blocks/forms/forms"),
        toContact         = require("../blocks/advantages/__offer/advantages__offer"),
        toOrder           = require("../blocks/pricing/__cards/pricing__cards");

    rotateCards();
    switchContent();
    slider();
    blog();
    menu();
    toPortfolio();
    statistics();
    playVideo();
    sendForm();
    toContact();
    toOrder();
});



