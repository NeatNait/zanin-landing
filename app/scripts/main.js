'use strict';

console.log('\'Allo \'Allo!');


$(function () {

	var colors = ['blue','yellow','green','red'],
		c = 0;

	setInterval(function () {

		$('.change-color').removeClass(colors[c]);
		var x = (c < colors.length-1) ? c++ : c=0;
		$('.change-color').addClass(colors[c]);

	}, 3000);

});