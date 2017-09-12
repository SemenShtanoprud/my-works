jQuery(window).load(function() {
	var jQuerygrid = jQuery('.grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			columnWidth: 13,
		}
	});
	jQuerygrid.on( 'click', '.grid-item', function() {
		if (jQuery(this).hasClass( 'gigante' )) {
			jQuery(this).toggleClass('gigante');
			jQuery(this).children('.grid-answer').slideUp();
			jQuery(this).children('.grid-answer').hide(); 
		} else {
			jQuery('.grid-answer').hide(); 
			jQuery('.grid-item').removeClass('gigante');
			jQuery(this).toggleClass('gigante');
			jQuery(this).children('.grid-answer').show();
		}
		jQuerygrid.isotope('layout');
	});
	
//************** BEGIN button-form **************

	$(function() {
		var $overlay = $('.overlay');
		var $mainPopUp = $('.main-popup')
		$('button').on('click', function(){
			$overlay.addClass('visible');
			$mainPopUp.addClass('visible');
		});
		$overlay.on('click', function(){
			$(this).removeClass('visible');
			$mainPopUp.removeClass('visible');
		});
		$('#popup-close-button a').on('click', function(e){
			e.preventDefault();
			$overlay.removeClass('visible');
			$mainPopUp.removeClass('visible');
		});
	});

// ************** END button-form **************
// ************** BEGIN validate form **************

	$("#test").submit(function() {
		return $.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#test").serialize(),
			success: function(t) {
				setTimeout(function() {
					$(".setCookie").click();
					$("#test").trigger("reset");
					$('.container_form').hide('slow');
				}, 1500)
			}
		}),!1
	});
});
// ************** END validate form **************