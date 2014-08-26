function initJQuery(){
	getScript("/interactives/template/common/js/jquery-1.10.2.min.js", function(){

		jQuery(document).ready(function ($) {

			// --------------Custom Javascript Goes Here------
			var simpleDisplayAction = $('.simple-reveal-action');

			function displayInit(){
				if (simpleDisplayAction.length){
					$.getScript("/interactives/template/common/js/kason.display.js", function(){
						simpleDisplayAction.kason_display();
					});
				}
			}

			displayInit();


			/* **** START OTHER CUSTOME JAVASCRIPT HERE **** */


			/* SLIDESHOW CODE */

			/* UN-NOTE THIS TO USE SLIDESHOW 

			//setting pointers to jquery selectors related to slideshow

			var $slideshowImage = $('.slideshowImage'); //slideshow image tag
			var $slideshowCutline = $('.slideshowCutline'); // slideshow cutline p tag
			var $nextButton = $('.next'); // next button
			var $previousButton = $('.previous'); // previous button
			var imageNumber = $('.imageNumber'); // image number


			// setting array of slideshow images
			var slideshowImages = ["images/slideshow1.jpg", "images/slideshow2.jpg", "images/slideshow3.jpg", "images/slideshow4.jpg", "images/slideshow5.jpg", "images/slideshow6.jpg", "images/slideshow7.jpg", "images/slideshow8.jpg"];

			// setting variable equal to lengh of slideshow
			var slideshowLength = slideshowImages.length;


			//setting array of slideshow cutlines
			var cutlines = ['cutline1',
							'cutline2',
							'cutline3',
							'cutline4',
							'cutline5',
							'cutline6',
							'cutline7',
							'cutline8'];

			//updating the total number of images in the display
			$('.totalImages').html(slideshowLength);


			//setting the initial slideshow counter to 0
			var slideshowCounter = 0;


			//advancing the slideshow
			function advanceSlide() {

				//if the slideshow is not on the last image in the slideshow ...
				if (slideshowCounter < slideshowLength - 1) {

					slideshowCounter += 1; //advance the counter

					//change the slideshow image src and alt attributes to the next slide
					$slideshowImage.attr({
						'src': slideshowImages[slideshowCounter],
						'alt': cutlines[slideshowCounter]}
						);

					$slideshowImage.load(function() {
						$(imageNumber).html(slideshowCounter+1); //update the current slide number
						$slideshowCutline.html(cutlines[slideshowCounter]); //change the cutline to the next slideshow cutline
					})

				} else {
					return false;
				}

			};

			function previousSlide() {

				// if the slideshow is not on the first image in the slideshow ... 
				if (slideshowCounter > 0) {


						slideshowCounter -= 1; //rewind the counter

						//change the slideshow image src and alt attributes to the previous slide
						$slideshowImage.attr({
							'src': slideshowImages[slideshowCounter],
							'alt': cutlines[slideshowCounter]}
							);

						$slideshowImage.load(function() {
							$(imageNumber).html(slideshowCounter+1); //update the current slide number
							$slideshowCutline.html(cutlines[slideshowCounter]); //change the cutline to the previous slideshow cutline
						})

				} else {
					return false;
				}
			}


			$nextButton.click(function() {
				advanceSlide();
			});

			$previousButton.click(function() {
				previousSlide();
			});


			$.preloadImages = function(slideshow) {
				for (var i = 0; i < slideshow.length; i++) {
				    $("<img />").attr("src", slideshow[i]);
				}
			}

			$.preloadImages(slideshowImages);

			*/


			/* ---------- VIDEO ASPECT RESIZER -------- */

			/* UN-NOTE THIS BLOCK TO USE VIDEO  
	

			//caching a pointer to the jquery element

			var $videoWrapper = ''

			if ($('.ndn_embed')) {
				$videoWrapper = $('.ndn_embed');
				scaleVideo();
			}

				function scaleVideo() {

					videoWidth = $videoWrapper.width(); //grabs the width of the video player
					videoHeight = videoWidth * .5625; //sets a variable equal to 56.25% of the width (the correct aspect ratio for the videos)

					$videoWrapper.css('height', videoHeight); //assings that height variable as the player's height in the css
				}


			$(window).resize(function() {
				scaleVideo(); //runs the video aspect resizer when the width of the browser is changed
			})

			*/


			// --------------Custom Javascript Ends Here------
		});
	});
}


function init(){
	if (storyURL && comments){
		commentInit(storyURL, storyTitle);
	}
	if (storyURL && leadText && share){
		shareInit(storyURL, storyTitle, leadText, storyIMG);
	}
	// trackingInit(storyURL);

	
	
}
init();
initJQuery();