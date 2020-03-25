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

	

});

