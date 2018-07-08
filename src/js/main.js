$(document).ready(() => {
    let is_open = false;
    let is_sticked = false;

    $('#hamb-menu').click(() => {
        if(!is_open) {
            $('#hamb-menu').addClass('open');
            is_open = true;
        } else {
            $('#hamb-menu').removeClass('open');
            is_open = false;
        }

        $('#header-menu').slideToggle(300);
    });

    $(window).scroll(() => {
        if($(this).scrollTop() > $(this).height()) {
            $('.page-header').addClass('sticked-header');
            is_sticked = true;
        } else {
            $('.page-header').removeClass('sticked-header');
            is_sticked = false;
        }
        
    });
     
});
