$(document).ready(function(){

	// Efecto Menu
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});
		$(this).animate({
			'top': '0px'
		},2000 + (index * 1000));
	});



// Efecto Header
	if ($(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .textos').animate({
			opacity: 1,
			marginTop: '-55px'
		},4000);
	}

// Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

// Boton Acerca de
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 40
		});
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 40
		});
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 40
		});
	});


});