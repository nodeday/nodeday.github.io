/**
 * Created by lmarkus on 1/10/14.
 */
$(function () {
    // $(window).resize(function () {
    //     if ($(window).width() > 640) {
    //         $('.nav').removeClass('tc').show();
    //         $('.toggler').hide();
    //     }
    //     else {
    //         $('.nav').hide();
    //         $('.toggler').show();
    //     }
    // });

    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.nav li').click(function () {
        $('.navbar-toggle').click();
    });
});