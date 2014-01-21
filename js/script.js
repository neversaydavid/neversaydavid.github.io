$(document).ready(function ($) {

    // Isotope
    var $container = $('#container');
    // initialize isotope
    $container.imagesLoaded(function(){
        $container.isotope({
            // options...
            itemSelector: '.item',
            layoutMode: 'masonry'
        });
    });
    // filter items when filter link is clicked
    $('#filters a').click(function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });

    // Scroll to easing
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 65
        }, 600, 'swing', function() {
            window.location;
        });
    });

    // Collapse the mobile navbar on click
    if ($(window).width() < 768) {
        $(window).on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
    }

});