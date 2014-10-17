/*
 * Author: Justin Ashley
 * Created: 10/14/2014
 *
 * Description: This file serves as the core functionality for the system.
 */

(function($) {
	$(function() {

		// Get the logo's initial position
		var $logo = $("#logo-wrapper img"),
			logo_position = $logo.position(),
			window_width = getScreenSize(),
			timeOut = 1000,
			showPortfolioRow1 = true,
			showPortfolioRow2 = true;

		// Create custom cursor
		$( "body" ).css( "cursor", "url(images/hgm.png ), auto" );

		// Display Items differently on lower resolutions
		if( window_width <= 760 ) {
			setTimeout(function(){
				$logo.velocity({ opacity: 100 },2000);
			}, 500);

			showHeaderTitle(timeOut);
			showHeaderBorder(timeOut + 500);
			showFeaturedProject(timeOut + 1500);
			showPortfolioRows(timeOut + 2000);
		}
		
		// Display Items on desktop/Tablet resolutions
		else {

			var offset_logo = window_width - (window_width * .60);

			$logo.css({
				"position" : "relative",
				"right"    : -offset_logo + "px"
			});

			// This animates the logo and brings it into the user's view
			setTimeout(function() {
				$logo.velocity({
					"right" : "0px",
					"opacity" : 100
				}, timeOut);

				// Rotate the logo as it comes in
				$logo.rotate({angle:0, animateTo:360, easing: $.easing.easeInOutExpo});
			}, 500);

			showHeaderBorder(timeOut + 200);
			showHeaderTitle(timeOut + 1000);
			showFeaturedProject(timeOut + 1500);

			// Detects screen size on scroll
			$(window).on('scroll', function(){
				// Detect if the first portfolio row comes into view, and then display it by animation when it does
				if(showPortfolioRow1) { 
					if(isScrolledIntoView($("#portfolio-row-1"))) {
						slideElementIntoView("portfolio-1");
						showPortfolioRow1 = false;
					}
				}

				// Detect if the second portfolio row comes into view, and then display it by animation when it does
				if(showPortfolioRow2) {
					if(isScrolledIntoView($("#portfolio-row-2"))) {
						slideElementIntoView("portfolio-4");
						showPortfolioRow2 = false;
					}
				}

				if(showPortfolioRow1 == false && showPortfolioRow2 == false ) {
					$(window).off("scroll");
				}

			}); // end $(window).on();


		} // end if(window_width)

		/*** Function Block: ***/

		function showHeaderTitle(timeOut) {
			setTimeout(function() {
				$("#header-title-wrapper h1").velocity({
					"opacity" : 100
				},5000);
			}, timeOut);
		} // end showHeaderTitle()

		function showHeaderBorder(timeOut) {
			setTimeout(function() {
				$("#header-bottom-border").velocity({
					"width" : "100%"
				},1000);
			}, timeOut);
		} // end showHeaderBorder()

		function showFeaturedProject(timeOut) {
			setTimeout(function() {
				$("#featured-project").velocity({
					"opacity" : 100
				}, 5000);
			}, timeOut);
		} // end showFeaturedProject()

		function showPortfolioRows(timeOut) {
			setTimeout(function() {
				$(".additional-work .portfolio-wrapper").velocity({
					"opacity" : 100
				}, 5000);
			}, timeOut);
		}

		function slideElementIntoView(triggerId) {

			// Now, instead of generating opacity alone, reposition and slide element down
			var $triggerElement = $("#" + triggerId),
				elementPosition = $triggerElement.position();

			$triggerElement.css({
				"position" : "relative",
				"top"      : "-200px"
			});

			$("#" + triggerId).velocity({
				"opacity" : 100,
				"top"     : elementPosition.top
			}, {
				  duration: 1200,
				  easing: [ 300, 25 ]
			});

			var triggerId = $("#" + triggerId).attr("data-trigger-target");

			setTimeout(function() {
				if(triggerId == "false"){
					return;
				} else {
					slideElementIntoView(triggerId);
				}
			}, 200);
		} // end slideElementIntoView()

		// function from stack overflow (http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling by Scott Dowding)
		// Checks if an element is scrolled into view
		function isScrolledIntoView(elem) {
		    var docViewTop = $(window).scrollTop(),
		    	docViewBottom = docViewTop + $(window).height(),

		     	elemTop = $(elem).offset().top,
		     	elemBottom = elemTop + $(elem).height();

		    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		} // end isScrollIntoView()

		// Returns the screen size
		function getScreenSize() {
			return window.innerWidth;
		} // end getScreenSize()

		// Event that fires upon scroll
		window.onscroll = function(evt) {
		}; // end window.onscroll

		/*** End Function Block ***/
	});
})(jQuery);