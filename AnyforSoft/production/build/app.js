(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  /*BEGIN Carousel*/
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    },
    navText: ""
  });
  /*END Carousel*/

  /*BEGIN Scroll menu button*/
  $(".top_menu li a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  /*END Scroll menu button*/

  $(window).scroll(function () {
    var element_animations = [{
      selector: '.after_about_container_content',
      animation: 'visible animated fadeInRight'
    }, {
      selector: '.after_about_container_cont',
      animation: 'visible animated fadeInLeft'
    }, {
      selector: '.why_we_container',
      animation: 'visible animated fadeInUp'
    }, {
      selector: '.skill_nav.left',
      animation: 'visible animated fadeInDown'
    }, {
      selector: '.skill_nav.right',
      animation: 'visible animated fadeInUp'
    }, {
      selector: 'section.our_service .container_ui ul.ui_li',
      animation: 'visible animated fadeInUp'
    }, {
      selector: '.cont_footer_img',
      animation: 'visible animated fadeInUp'
    }, {
      selector: '.counter-box',
      animation: 'number',
      callback: function callback() {
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
    }];

    var client_height = document.documentElement.clientHeight;

    for (var i = 0; i < element_animations.length; i++) {
      var $element = $(element_animations[i].selector);
      if ($element.length) {
        var bottom_offset = window.pageYOffset + client_height - 20;
        var offset_flag = bottom_offset > $element.offset().top;
        var exist_flag = $element.hasClass(element_animations[i].animation);

        if (offset_flag && !exist_flag) {
          $element.addClass(element_animations[i].animation);

          if (typeof element_animations[i].callback !== 'undefined') element_animations[i].callback();
        }
      }
    }
  });
})(jQuery);

},{"./helpers":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQyxXQUFVLENBQVYsRUFBYTs7QUFHZDtBQUNBLElBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQjtBQUMzQixVQUFLLElBRHNCO0FBRTNCLFlBQU8sRUFGb0I7QUFHM0IsU0FBSSxJQUh1QjtBQUkzQixVQUFLLEtBSnNCO0FBSzNCLGdCQUFXO0FBQ1AsU0FBRTtBQUNFLGVBQU07QUFEUjtBQURLLEtBTGdCO0FBVTNCLGFBQVM7QUFWa0IsR0FBL0I7QUFZQTs7QUFFQTtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBUyxLQUFULEVBQWdCO0FBQzlDLFVBQU0sY0FBTjtBQUNBLFFBQUksS0FBSyxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFUO0FBQUEsUUFDRSxNQUFNLEVBQUUsRUFBRixFQUFNLE1BQU4sR0FBZSxHQUR2QjtBQUVBLE1BQUUsV0FBRixFQUFlLE9BQWYsQ0FBdUI7QUFDckIsaUJBQVc7QUFEVSxLQUF2QixFQUVHLElBRkg7QUFHRCxHQVBEO0FBUUE7O0FBSUEsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFrQixZQUFZO0FBQ3hCLFFBQUkscUJBQXFCLENBQ3pCO0FBQ0UsZ0JBQVUsZ0NBRFo7QUFFRSxpQkFBVztBQUZiLEtBRHlCLEVBS3pCO0FBQ0UsZ0JBQVUsNkJBRFo7QUFFRSxpQkFBVztBQUZiLEtBTHlCLEVBU3pCO0FBQ0UsZ0JBQVUsbUJBRFo7QUFFRSxpQkFBVztBQUZiLEtBVHlCLEVBYXpCO0FBQ0UsZ0JBQVUsaUJBRFo7QUFFRSxpQkFBVztBQUZiLEtBYnlCLEVBaUJ6QjtBQUNFLGdCQUFVLGtCQURaO0FBRUUsaUJBQVc7QUFGYixLQWpCeUIsRUFxQnpCO0FBQ0UsZ0JBQVUsNENBRFo7QUFFRSxpQkFBVztBQUZiLEtBckJ5QixFQXlCekI7QUFDRSxnQkFBVSxrQkFEWjtBQUVFLGlCQUFXO0FBRmIsS0F6QnlCLEVBK0J4QjtBQUNDLGdCQUFVLGNBRFg7QUFFQyxpQkFBVyxRQUZaO0FBR0MsZ0JBQVUsb0JBQVk7QUFDcEIsVUFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLFlBQVk7QUFDbEMsWUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFNBQWIsRUFBd0IsQ0FBeEIsRUFBMkIsT0FBM0IsQ0FBbUM7QUFDakMscUJBQVMsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE9BQWI7QUFEd0IsV0FBbkMsRUFFRztBQUNELHNCQUFVLElBRFQ7QUFFRCxvQkFBUSxPQUZQO0FBR0Qsa0JBQU0sU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUN2QixnQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYjtBQUNEO0FBTEEsV0FGSDtBQVNELFNBVkQ7QUFXRDtBQWZGLEtBL0J3QixDQUF6Qjs7QUFrREEsUUFBSSxnQkFBZ0IsU0FBUyxlQUFULENBQXlCLFlBQTdDOztBQUVBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxtQkFBbUIsTUFBdkMsRUFBK0MsR0FBL0MsRUFBcUQ7QUFDbkQsVUFBSSxXQUFXLEVBQUUsbUJBQW1CLENBQW5CLEVBQXNCLFFBQXhCLENBQWY7QUFDQSxVQUFJLFNBQVMsTUFBYixFQUFxQjtBQUNuQixZQUFJLGdCQUFnQixPQUFPLFdBQVAsR0FBcUIsYUFBckIsR0FBcUMsRUFBekQ7QUFDQSxZQUFJLGNBQWMsZ0JBQWdCLFNBQVMsTUFBVCxHQUFrQixHQUFwRDtBQUNBLFlBQUksYUFBYSxTQUFTLFFBQVQsQ0FBa0IsbUJBQW1CLENBQW5CLEVBQXNCLFNBQXhDLENBQWpCOztBQUVBLFlBQUksZUFBZSxDQUFFLFVBQXJCLEVBQWtDO0FBQ2hDLG1CQUFTLFFBQVQsQ0FBa0IsbUJBQW1CLENBQW5CLEVBQXNCLFNBQXhDOztBQUVBLGNBQUksT0FBTyxtQkFBbUIsQ0FBbkIsRUFBc0IsUUFBN0IsS0FBMEMsV0FBOUMsRUFDRSxtQkFBbUIsQ0FBbkIsRUFBc0IsUUFBdEI7QUFDSDtBQUNGO0FBQ0Y7QUFDRixHQXBFTDtBQXdFQyxDQXZHQSxFQXVHQyxNQXZHRCxDQUFEOzs7Ozs7OztBQ0ZBLElBQUksS0FBSztBQUNQLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDekIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4QyxHQUFyRDtBQUNEO0FBSE0sQ0FBVDs7a0JBTWUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cblxuLypCRUdJTiBDYXJvdXNlbCovXG4kKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSxcbiAgICBtYXJnaW46MTAsXG4gICAgbmF2OnRydWUsXG4gICAgZG90czpmYWxzZSxcbiAgICByZXNwb25zaXZlOntcbiAgICAgICAgMDp7XG4gICAgICAgICAgICBpdGVtczoxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5hdlRleHQ6IFwiXCJcbn0pXG4vKkVORCBDYXJvdXNlbCovXG5cbi8qQkVHSU4gU2Nyb2xsIG1lbnUgYnV0dG9uKi9cbiQoXCIudG9wX21lbnUgbGkgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpXG4gICwgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xuICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICBzY3JvbGxUb3A6IHRvcFxuICB9LCAxNTAwKTtcbn0pO1xuLypFTkQgU2Nyb2xsIG1lbnUgYnV0dG9uKi9cblxuXG5cbiQod2luZG93KS5zY3JvbGwoIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbGVtZW50X2FuaW1hdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnLmFmdGVyX2Fib3V0X2NvbnRhaW5lcl9jb250ZW50JyxcbiAgICAgICAgYW5pbWF0aW9uOiAndmlzaWJsZSBhbmltYXRlZCBmYWRlSW5SaWdodCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnLmFmdGVyX2Fib3V0X2NvbnRhaW5lcl9jb250JyxcbiAgICAgICAgYW5pbWF0aW9uOiAndmlzaWJsZSBhbmltYXRlZCBmYWRlSW5MZWZ0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcud2h5X3dlX2NvbnRhaW5lcicsXG4gICAgICAgIGFuaW1hdGlvbjogJ3Zpc2libGUgYW5pbWF0ZWQgZmFkZUluVXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJy5za2lsbF9uYXYubGVmdCcsXG4gICAgICAgIGFuaW1hdGlvbjogJ3Zpc2libGUgYW5pbWF0ZWQgZmFkZUluRG93bidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnLnNraWxsX25hdi5yaWdodCcsXG4gICAgICAgIGFuaW1hdGlvbjogJ3Zpc2libGUgYW5pbWF0ZWQgZmFkZUluVXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ3NlY3Rpb24ub3VyX3NlcnZpY2UgLmNvbnRhaW5lcl91aSB1bC51aV9saScsXG4gICAgICAgIGFuaW1hdGlvbjogJ3Zpc2libGUgYW5pbWF0ZWQgZmFkZUluVXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJy5jb250X2Zvb3Rlcl9pbWcnLFxuICAgICAgICBhbmltYXRpb246ICd2aXNpYmxlIGFuaW1hdGVkIGZhZGVJblVwJ1xuICAgICAgfSxcblxuICAgICAgXG4gICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJy5jb3VudGVyLWJveCcsXG4gICAgICAgIGFuaW1hdGlvbjogJ251bWJlcicsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJCgnLmNvdW50LW51bWJlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywgMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIENvdW50ZXI6ICQodGhpcykuZGF0YSgnY291bnQnKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbiBzdGVwKG5vdykge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBdO1xuXG4gICAgICB2YXIgY2xpZW50X2hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZWxlbWVudF9hbmltYXRpb25zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnRfYW5pbWF0aW9uc1tpXS5zZWxlY3Rvcik7XG4gICAgICAgIGlmKCAkZWxlbWVudC5sZW5ndGggKXtcbiAgICAgICAgICB2YXIgYm90dG9tX29mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIGNsaWVudF9oZWlnaHQgLSAyMDtcbiAgICAgICAgICB2YXIgb2Zmc2V0X2ZsYWcgPSBib3R0b21fb2Zmc2V0ID4gJGVsZW1lbnQub2Zmc2V0KCkudG9wO1xuICAgICAgICAgIHZhciBleGlzdF9mbGFnID0gJGVsZW1lbnQuaGFzQ2xhc3MoZWxlbWVudF9hbmltYXRpb25zW2ldLmFuaW1hdGlvbik7XG5cbiAgICAgICAgICBpZiggb2Zmc2V0X2ZsYWcgJiYgISBleGlzdF9mbGFnICkge1xuICAgICAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoZWxlbWVudF9hbmltYXRpb25zW2ldLmFuaW1hdGlvbik7XG5cbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZWxlbWVudF9hbmltYXRpb25zW2ldLmNhbGxiYWNrICE9PSAndW5kZWZpbmVkJyApXG4gICAgICAgICAgICAgIGVsZW1lbnRfYW5pbWF0aW9uc1tpXS5jYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gKTtcblxuXG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
