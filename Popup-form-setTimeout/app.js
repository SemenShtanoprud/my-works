$(document).ready(function() {
	$(".setCookie").click(function () {
		$.cookie("popup2", "24house", {expires: 0} );
		$("#bg_popup").hide();
	});
	if ( $.cookie("popup2") == null ){
		setTimeout(function(){
			$("#bg_popup").show();
		}, 4000)
	} else {
		$("#bg_popup").hide();
	}
});
$(document).ready(function() {
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


