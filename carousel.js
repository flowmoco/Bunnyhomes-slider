'use strict';
// carousel

$(function() {

    var $wrapper = $('#carousel-wrapper');
    var $container = $('#carousel-container');
	var $ul = $('#carousel');
	var $li = $('#carousel li');
	var numberOfSlides = $li.length;
	var animationSpeed = 1000;
	var animationPause = 5000;
	var currentSlide = 1;
   
	// initial animation setup
    
    function setup() {
        var windowWidth = $(window).width();
        $wrapper.css('width', windowWidth);
        $container.css('width', windowWidth);
        $ul.css('width', windowWidth * numberOfSlides);
        $li.css('width', windowWidth)   
        console.log(windowWidth);
    }
    
    setup();
    
    $(window).resize(function() {
        setup();
    });

	// self animation
	var cycle = setInterval(function() {
	    $ul.animate({'margin-left': '-=' + windowWidth}, animationSpeed, function() {
			currentSlide++;
			// return to start
			if (currentSlide === numberOfSlides) {
				currentSlide = 1;
				$ul.css('margin-left', 0);
			}
		});
	}, animationPause);
});