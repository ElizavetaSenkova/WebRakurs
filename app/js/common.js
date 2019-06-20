$(function() {

	// services-open

	$(".page-header__nav a").click(function(){
		if ($(this).siblings().length > 0){
			$(this).toggleClass("selected");
			console.log("q");
			return false;
		} else {
			$(".page-header__nav-link--services").removeClass("selected");
			$(this).toggleClass("selected");
		}	
	})

	// services-open

	// burger

	$('.menu-toggle.burger').each(function(){
		$(this).empty().append('<div class="box"></div>');
		var i = 0;
		var rect_classes = ['top','middle','bottom'];
		while (i < 3) {
			$(this).find('.box').append('<div class="rect rect-'+ rect_classes[i] +'"></div>');
			i++;
		}
	});
	
	$('.menu-toggle.burger').click(function(){
		$(this).toggleClass('close');
	});

	$(".burger").click(function(){
		$(".burger").toggleClass("m0");
		$(".page-header").toggleClass("active");
	});

	// burger

	$(".menu-toggle").click(function(){
		$(this).toggleClass("active");
		if ( $(".page-header").is(":visible") ){
			$(".page-header").fadeOut();
		} else {
			$(".page-header").fadeIn();
		}
	});

	// popup

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
	
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	
	$('#close').click(function(){
		$('.mfp-close').trigger('click');
	});

	// popup

	// slider

	$("#stages__slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).find('[data-title]').data('title') + '<i class="fa fa-sort-asc"></i></button>';
		},
		appendDots:'.custom-dots',
    arrows: true,
    slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
});


$('#stages__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
	$('.slick-slide[data-slick-index='+currentSlide+'] .stages__image-inner img').removeClass('animated bounceInUp');
		 $('.slick-slide[data-slick-index='+nextSlide+'] .stages__image-inner img').addClass('animated bounceInUp');
	});

	new WOW().init();

	// slider

});
