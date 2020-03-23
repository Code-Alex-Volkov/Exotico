// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery");

	/*window.jQuery = $;
	window.$ = $;*/

$(document).ready(function(){
   alert('Приветик');
});

