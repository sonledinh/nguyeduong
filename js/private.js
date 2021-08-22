
$('.slide-banner').slick({
    autoplay: true,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
}); 

$('.slide-prd').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
}); 

$('.slde-machine').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
}); 

$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 2, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 1023, 
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            } 
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
}); 

if($(window).innerWidth() >= 1024){
    $(document).ready(function(){
       $(window).bind('scroll', function() {
             if ($(window).scrollTop() > 37) {
                 $('.header-menu, main').addClass('fixed');
             }
             else {
                 $('.header-menu, main').removeClass('fixed');
             }
        });
    });

new WOW().init();

}
if($(window).innerWidth() <= 1023){
    $('.list-project .row').slick({
        autoplay: false,
        arrow: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1023, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });  
}

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 