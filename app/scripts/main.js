'use strict';

console.log('\'Allo \'Allo!');


$(function () {

	var colors = ['blue','yellow','green','red'],
		c = 0;

	setInterval(function () {

		$('#iphone5c').removeClass(colors[c]);
		var x = (c < colors.length-1) ? c++ : c=0;
		$('#iphone5c').addClass(colors[c]);

	}, 3000);

});