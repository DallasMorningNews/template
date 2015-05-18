$(document).ready(function() {
	
	//custom scripting goes here


	/* SLIDESHOWS */

	//setting up variables for the slideshow

	var slideCounter = 0,
		$nextButton = $('.nextButton'),
		$previousButton = $('.previousButton'),
		$slideCutline = $('.slide .cutline'),
		totalSlides = $('.slide').length;

	// checks which image we're on in the slideshow
	// if it's the first, hide the previous button
	// if it's the last, hide the next button
	// else show the previous and last buttons 

	function slidePosition() {
		if (slideCounter === 0) {
			$previousButton.hide();
		} else if ( slideCounter === (totalSlides - 1) ) {
			$nextButton.hide();
		} else {
			$previousButton.show();
			$nextButton.show();
		}
	}

	// advancing the slideshow by moving the current slide to the right
	// then moving the next slide in from the left
	// afterward, grab the file path and assign it to the next image's src attribute
	// then check where we are in the slideshow

	function advanceSlide() {
		slideCounter ++;
		$(this).siblings('.current').addClass('postSlide').removeClass('current');
		$(this).siblings('.slide').eq(slideCounter).addClass('current').removeClass('preSlide');
		var defaultImage = $(this).siblings('.slide').eq(slideCounter + 1).data('default');
		var srcset = $(this).siblings('.slide').eq(slideCounter + 1).data('srcset');
		$(this).siblings('.slide').eq(slideCounter + 1).children('img').attr('src', defaultImage).attr('srcset', srcset);;
		slidePosition();
	}

	// rewind the slideshow by moving the current slide to the left
	// then move the previous slide back into view from the left
	// then check where we are in the slideshow 

	function rewindSlide() {
		slideCounter --;
		$(this).siblings('.current').addClass('preSlide').removeClass('current');
		$(this).siblings('.slide').eq(slideCounter).addClass('current').removeClass('postSlide');
		slidePosition();
	}

	// append a number and total length of slideshow to each cutline 

	$slideCutline.each(function(k,v) {
		var cutlinePrefix = (k + 1) + " of " + totalSlides + ": ";
		$(this).prepend(cutlinePrefix);
	})

	//running the slidePosition initially to hide previous button
	slidePosition();

	//binding click and swipe events to the next and previous button

	$nextButton.on('click', advanceSlide);
	$previousButton.on('click', rewindSlide);

	// if you want to be able to swipe the slideshow on touch devices, un-note the following two lines
	// and make sure you call jquery.swipe.min.js in the index file

	// $nextButton.on("swipeleft", advanceSlide);
	// $previousButton.on("swiperight", rewindSlide);

});

