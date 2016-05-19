/**
 * Created by Irina on 28.04.2016.
 */
$( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.slider').slider({
        directionNav: false,
        controlNav: false,
        full_width: true
    });

    $('.prev, .next').on('click', function(){
        var href = $(this).attr('href');
        $('.slider').slider(href);
        return false;
    })

})