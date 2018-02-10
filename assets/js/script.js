jQuery(document).ready(function($) {
 
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

     $(window).scroll(function(){

        if ($(this).scrollTop() > 60 && !$('.navbar').hasClass('show-navbar') ) {
            $('.navbar').addClass('show-navbar');
            $('.navbar').slideDown();
        } else if ( $(this).scrollTop() < 60 ) {
            $('.navbar').removeClass('show-navbar');
            //$('.navbar').slideUp();
        }

        if ($(this).scrollTop() > 100) {
            $('.backToTop').fadeIn();
        } else {
            $('.backToTop').fadeOut();
        }
    });

    var wow = new WOW(
    {
        boxClass:     'wowload',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true        // act on asynchronously loaded content (default is true)
    }
    );
    wow.init();

    $('.carousel').swipe( {
        swipeLeft: function() {
            $(this).carousel('next');
        },
        swipeRight: function() {
            $(this).carousel('prev');
        },
        allowPageScroll: 'vertical'
    });

