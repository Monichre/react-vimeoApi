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



	// Document on load.
	$(function(){


		var button = document.getElementById('cn-button'),
	    wrapper = document.getElementById('cn-wrapper'),
	    overlay = document.getElementById('cn-overlay');

		//open and close menu when the button is clicked
		var open = false;
		button.addEventListener('click', handler, false);
		wrapper.addEventListener('click', cnhandle, false);

		function cnhandle(e){
			e.stopPropagation();
		}

		function handler(e){
			if (!e) var e = window.event;
		 	e.stopPropagation();//so that it doesn't trigger click event on document

		  	if(!open){
		    	openNav();
		  	}
		 	else{
		    	closeNav();
		  	}
		}
		function openNav(){
			open = true;
		    button.innerHTML = "-";
		    classie.add(overlay, 'on-overlay');
		    classie.add(wrapper, 'opened-nav');
		}
		function closeNav(){
			open = false;
			button.innerHTML = "+";
			classie.remove(overlay, 'on-overlay');
			classie.remove(wrapper, 'opened-nav');
		}
		document.addEventListener('click', closeNav);


	});







});
