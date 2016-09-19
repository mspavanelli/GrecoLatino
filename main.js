var scroll = function() {
	$('.areas figure').click(function() {
		$('html, body').animate({
			scrollTop: $('#detalhes').offset().top - 30
		});
	});
}

$(document).ready(function() {
	
	// scroll();

	$('.areas img').click(function() {
		$(this).addClass('animated jello').removeClass('animated jello');
	});

});


// $("#button").click(function() {
//   $("#button").addClass("fadeInDown animated").one('animationend webkitAnimationEnd oAnimationEnd', function() {
//     $("#button").removeClass();
//   });
// });