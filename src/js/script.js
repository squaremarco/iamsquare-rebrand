var bonzo = require("bonzo");
var qwery = require("qwery");

(function($){
	'use strict';

	var str = ["eat pizza", "be creative", "watch movies", "draw stuff", "play videogames", "be awesome"];

	$(".random").text(str[Math.floor(Math.random() * str.length)]);
	$(".date").text(new Date().getFullYear());

})(function(selector){
	return bonzo(qwery(selector));
});
