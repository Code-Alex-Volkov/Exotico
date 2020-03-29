// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery");

	/*window.jQuery = $;
	window.$ = $;*/

$(document).ready(function(){
	'use strict';
   /*alert('Приветик');*/

	/*home_slider*/
	if ($('.home_slider').length) {
		$('.home_slider').slick({
	   	vertical: true,
	   	arrows: false,
	   	dots: true
	   });
	}

   /*Popup Video*/
   if ($('.open_video').length) {
   	$('.open_video').magnificPopup({
		  type: 'iframe'
		});
   }
   

	/*Carusel Slider for Shop Items*/
	if ($('.shop_carusel').length) {
		$('.shop_carusel').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  appendArrows: $('.shop_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>"
		});
	}

	/*Popup Video*/
   if ($('.testy_gallery').length) {
   	$('.testy_gallery').magnificPopup({
		  type: 'image',
		  closeOncontentClick: true,
		  image: {
		  	verticalFit: true
		  }
		});
   }

   /*twitter Slider*/
	if ($('.content_slider_tweeter').length) {
		$('.content_slider_tweeter').slick({
			vertical: true,
	   	appendArrows: $('.tweet_slider .arrows'),
		  	prevArrow: "<span class=\"up\"><i class=\"fas fa-arrow-up\"></i></span>",
		  	nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
	   });
	}

	//Responsive menu
	if ($('.fa-bars').length) {
		$('.fa-bars').on('click', function () {
			$('.header_top .inner_header nav > ul').show();
			$(this).hide();
			$('fa-times').show();
			
		});
		$('.fa-times').on('click', function () {
			$('.header_top .inner_header nav > ul').hide();
			$(this).hide();
			$('fa-bars').show();
		});
	}
	

});

