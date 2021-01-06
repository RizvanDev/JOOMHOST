$('.slider__inner').slick({
		arrows: true,
		infinite: false,
		initialSlide: 0,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		centerMode: false,
		waitForAnimate: false,
		speed: 1000,
		responsive: [{
			breakpoint: 1022,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]

	})