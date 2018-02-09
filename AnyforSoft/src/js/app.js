import HP from './helpers';

(function ($) {


/*BEGIN Carousel*/
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
/*END Carousel*/

/*BEGIN Scroll menu button*/
$(".top_menu li a").on("click", function(event) {
  event.preventDefault();
  var id = $(this).attr('href')
  , top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});
/*END Scroll menu button*/



$(window).scroll( function () {
      var element_animations = [
      {
        selector: '.after_about_container_content',
        animation: 'visible animated fadeInRight'
      },
      {
        selector: '.after_about_container_cont',
        animation: 'visible animated fadeInLeft'
      },
      {
        selector: '.why_we_container',
        animation: 'visible animated fadeInUp'
      },
      {
        selector: '.skill_nav.left',
        animation: 'visible animated fadeInDown'
      },
      {
        selector: '.skill_nav.right',
        animation: 'visible animated fadeInUp'
      },
      {
        selector: 'section.our_service .container_ui ul.ui_li',
        animation: 'visible animated fadeInUp'
      },
      {
        selector: '.cont_footer_img',
        animation: 'visible animated fadeInUp'
      },

      
       {
        selector: '.counter-box',
        animation: 'number',
        callback: function () {
          $('.count-number').each(function () {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).data('count')
            }, {
              duration: 5000,
              easing: 'swing',
              step: function step(now) {
                $(this).text(Math.ceil(now));
              }
            });
          });
        }
      }
      ];

      var client_height = document.documentElement.clientHeight;

      for( var i = 0; i < element_animations.length; i++ ) {
        var $element = $(element_animations[i].selector);
        if( $element.length ){
          var bottom_offset = window.pageYOffset + client_height - 20;
          var offset_flag = bottom_offset > $element.offset().top;
          var exist_flag = $element.hasClass(element_animations[i].animation);

          if( offset_flag && ! exist_flag ) {
            $element.addClass(element_animations[i].animation);

            if( typeof element_animations[i].callback !== 'undefined' )
              element_animations[i].callback();
          }
        }
      }
    } );



}(jQuery));