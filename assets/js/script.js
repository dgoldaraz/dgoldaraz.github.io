jQuery(document).ready(function($) {
 
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();    
            } else {
                $('#back-to-top').fadeOut();
            }
        });
     
        $('#back-to-top').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });    
    });

    $(window).scroll(function(){

        if ($(this).scrollTop() > 60 && !$('.navbar').hasClass('show-navbar') ) {
            $('.navbar').addClass('show-navbar');
            $('.navbar').slideDown();
        } else if ( $(this).scrollTop() < 60 ) {
            $('.navbar').removeClass('show-navbar');
            //$('.navbar').slideUp();
        }
    });

    var wow = new WOW(
    {
        boxClass:     'wowload',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true        // act on asynchronously loaded content (default is true)
    });
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

});