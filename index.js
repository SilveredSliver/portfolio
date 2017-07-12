//START of jquery for h1 textDiv animation
var textDiv = $('#textDiv'),
    sentence = textDiv.html().split(''),
    tl = new TimelineMax({repeat:100, repeatDelay:0.2, yoyo:true});

TweenLite.set(textDiv, {css:{perspective:500, perspectiveOrigin:'50% 50%', transformStyle:'preserve-3d'}});
textDiv.html('');

$.each(sentence, function(index, val) {
			if(val === ' ') {
				val = '&nbsp;';			}
			var letter = $('<span/>', {id : 'txt' + index}).html(val).appendTo(textDiv);
   tl.to(letter, 1, {autoAlpha:1, ease:Back.easeOut,  fadeIn:0, transformOrigin:'50% 50% -20'}, index * 0.04);
});
//END of jquery for h1 textDiv animation


//START of jquery for the backgroud animation
jQuery(document).ready(function($){

var windowXArray = [],
    windowYArray = [];

for (var i = 0; i < $(window).innerWidth(); i++) {
    windowXArray.push(i);
}

for (var i = 0; i < $(window).innerHeight(); i++) {
    windowYArray.push(i);
}

function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
}


var canvas = oCanvas.create({
   canvas: '#canvas',
   background: '#2c3e50',
   fps: 60
});

setInterval(function(){

var rectangle = canvas.display.ellipse({
   x: randomPlacement(windowXArray),
   y: randomPlacement(windowYArray),
   origin: { x: 'center', y: 'center' },
   radius: 0,
   fill: '#27ae60',
   opacity: 1
});

canvas.addChild(rectangle);

rectangle.animate({
  radius: 10,
  opacity: 0
}, {
  duration: '1000',
  easing: 'linear',
  callback: function () {
			this.remove();
		}
});

}, 100);

$(window).resize(function(){
canvas.width = $(window).innerWidth();
canvas.height = $(window).innerHeight();
});

$(window).resize();

});
//END of jquery for the background animation
