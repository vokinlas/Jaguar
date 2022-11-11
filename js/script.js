$(document).ready(function () {

	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: false,
		vertical: true,
		appendArrows: $('.slider-block__title')
	});

});