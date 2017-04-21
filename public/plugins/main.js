(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};





	/*	Masonry
	------------------------------------------------------ */
	var ssMasonryFolio = function() {
		var containerBricks = $('.bricks-wrapper');

		containerBricks.imagesLoaded( function() {

			containerBricks.masonry( {
			  	itemSelector: '.entry',
			  	columnWidth: '.grid-sizer',
	  			percentPosition: true,
			  	resize: true
			});

		});
	};


  /* animate bricks
	* ------------------------------------------------------ */
	var ssBricksAnimate = function() {

		var animateEl = $('.animate-this');

		window.on('load', function() {
			setTimeout(function() {
				animateEl.each(function(ctr) {
						var el = $(this);

						setTimeout(function() {
							el.addClass('animated fadeInUp');
						}, ctr * 200);

				});
			}, 200);
		});

		window.on('resize', function() {
			// remove animation classes
			animateEl.removeClass('animate-this animated fadeInUp');
		});

	};


  /* Flex Slider
	* ------------------------------------------------------ */
	var ssFlexSlider = function() {

		window.on('load', function() {

		   $('#featured-post-slider').flexslider({
				namespace: "flex-",
		      controlsContainer: "", // ".flex-content",
		      animation: 'fade',
		      controlNav: false,
		      directionNav: true,
		      smoothHeight: false,
		      slideshowSpeed: 7000,
		      animationSpeed: 600,
		      randomize: false,
		      touch: true,
		   });

		   $('.post-slider').flexslider({
		   	namespace: "flex-",
		      controlsContainer: "",
		      animation: 'fade',
		      controlNav: true,
		      directionNav: false,
		      smoothHeight: false,
		      slideshowSpeed: 7000,
		      animationSpeed: 600,
		      randomize: false,
		      touch: true,
		      start: function (slider) {
					if (typeof slider.container === 'object') {
						slider.container.on("click", function (e) {
							if (!slider.animating) {
								slider.flexAnimate(slider.getTarget('next'));
							}
						});
					}

					$('.bricks-wrapper').masonry('layout');
				}
		   });

	   });
	};








});
