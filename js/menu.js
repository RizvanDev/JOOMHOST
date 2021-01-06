$(document).ready(function() {

	$('.burger__menu').click(function(event) {
		$('.burger__menu,.menu__list').toggleClass('active');
		$('body').toggleClass('lock')
	});
});