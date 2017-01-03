$(document).ready(function() {

	var scroll = function(elemento, alvo) {
		$(elemento).click(function() {
			$(alvo).animatescroll({padding:51});
		});
	}

	scroll(".navbar-brand", "html");

	var areas = ['ingles', 'financas', 'redacao', 'hipnose', 'coaching'];
	areas.forEach(item => scroll(".item-"+item, ".area-"+item));

});
