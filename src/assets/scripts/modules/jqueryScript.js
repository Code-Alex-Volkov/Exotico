// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery");

	/*window.jQuery = $;
	window.$ = $;*/

$(document).ready(function(){
	'use strict';
   /*alert('Приветик');*/

   $('.home_slider').slick({
   	vertical: true,
   	arrows: false,
   	dots: true
   });

});

