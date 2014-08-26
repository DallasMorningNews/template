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