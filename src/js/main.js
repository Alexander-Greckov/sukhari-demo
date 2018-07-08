'use strict';

let is_open = false;

$(document).ready(() => {
    $("#hamb-menu").click(() => {
        if(!is_open) {
            $('#hamb-menu').addClass('open');
            is_open = true;
        } else {
            $('#hamb-menu').removeClass('open');
            is_open = false;
        }
        
        $('#header-menu').slideToggle(300);
    });
     
});
