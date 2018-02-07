import HP from './helpers';

(function ($) {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        }
    },
    navText: ""
})

}(jQuery));