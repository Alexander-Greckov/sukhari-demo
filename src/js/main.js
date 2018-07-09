$(document).ready(() => {
    var is_open = false;
    var is_sticked = false;

    $('#hamb-menu').click(function() {
        if(!is_open) {
            $('#hamb-menu').addClass('open');
            is_open = true;
        } else {
            $('#hamb-menu').removeClass('open');
            is_open = false;
        }

        $('#header-menu').slideToggle(300);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height() + 50) {
            $('.page-header').addClass('sticked-header');
            is_sticked = true;
        } else {
            $('.page-header').removeClass('sticked-header');
            is_sticked = false;
        }
        
    });

    $('a[href*=\\#]').click(function(event) {     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 30}, 1700);
    });
     
});
