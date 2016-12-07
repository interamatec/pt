$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 6,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [980, 4],
		itemsTablet: [768, 3],
		itemsMobile: [479, 2],
		autoPlay: true,
		stopOnHover: true,
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
		lazyLoad: false,
		lazyFollow: true,
		lazyEffect: "fade"
	});

	$('.gallery img').click(function () {
		var data = $(this).data('info');
		$(data).toggleClass('w3-show-block');
		$(document).keyup(function (e) {
			if (e.keyCode == 27) {
				$(data).toggleClass('w3-show-block');
				$(document).off('keyup');
			}
		});
	});

	$('.w3-modal .w3-closebtn').click(function () {
		$(this).parent().parent().parent().toggleClass('w3-show-block');
		$(document).off('keyup');
	});

	$('.arrow-down').click(function () {
		$('html, body').animate({
			scrollTop: $('#home').height()
		}, 1000);
	});

	var wbi = $('.welcome-bg img');
	wbi.imagesLoaded(function () {
		wbi.fadeIn('fast');
	});
});
