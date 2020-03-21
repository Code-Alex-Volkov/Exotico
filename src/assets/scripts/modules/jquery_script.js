// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

/*$(document).ready(function(){
   alert('Приветик');
});*/

$(document).ready(function(){
      $('.autoplay-class').slick({
       		slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 2000,
      });
    });