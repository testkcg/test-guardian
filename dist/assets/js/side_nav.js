
/*--SMOOTH PAGE SCROLLING--*/
	function smoothScrolling(topOffset) {
		if ( $(window).width() > 1024 ) {
			topOffset = 95;
		}
		else {
			topOffset = 0;
		}
	  
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
			    $('html, body').animate({
			      scrollTop: target.offset().top-topOffset
			    }, 1000);
			  }
			}
		});
	};
/*--END SMOOTH PAGE SCROLLING--*/
/*--SIDE NAVIGATION--*/

	// If body contains class to create side nav
	if ( $('.side_nav_sections_container').length != 0 ) {

		var	sideNavItem = $('.side_nav_item'),
			sideNavSectionContainer = $('.side_nav_sections_container'),
			sideNavSectionTitle = $('.side_nav_section_title'),
			eventCheck = true, // This variable is created so the scroll to add active class and click to add active class don't interfere with each other	
			distanceFromTop;

		// Give sidebar side_nav_mod_class
			sideNavSectionContainer
				.siblings('.mcol')
				.addClass('side_nav_mod')
				.append('<ul></ul>');

		// Create FAQ hash links and side nav content
			function setFaqHashLinks(event) {
				var sideNavModList = $('.side_nav_mod ul');

				sideNavSectionTitle.each(function(index) {
					index = index+1;
					sideNavSectionTitleText = $(this).text();

					$(this).attr('id', 'section_'+index);

					if ( index === 1 ) {
						sideNavModList.append('<li class="active side_nav_item"><a href='+'#section_'+index+'>'+sideNavSectionTitleText+'</a></li>');
					}
					else {
						sideNavModList.append('<li class="side_nav_item"><a href='+'#section_'+index+'>'+sideNavSectionTitleText+'</a></li>');	
					}
				});		
				return faqNavActivScroll();
			}
			setFaqHashLinks();

		//Use dynamically created Nav to set active class on scroll
			function faqNavActivScroll() {
				$('.side_nav_item').each(function(index) {
					index = index+1;

					$(window).scroll(function(event) {
						$('body').faqNavActiveScroll(index);
					});
				});	
			}
			
		// Set distance from top for FAQ nav category sections based on breakpoint
			function setScrollTopDistance() {
				if ( $(window).width() > 1024 ) {
						distanceFromTop = 120;
				}
				if ( $(window).width() < 1024 && $(window).width() > 850 ) {
					distanceFromTop = 95
				}
			}

		// Scroll to invoke active class in FAQ nav
			$.fn.faqNavActiveScroll = function(classInstance) {
				var scrollTop = $(this).scrollTop(),
					sideNavItemID = $('.side_nav_item:nth-child('+classInstance+')'),
					sideNavSectionTitleID = $('.side_nav_section_title#section_'+classInstance),
					sideNavSectionTitleIDOffset = sideNavSectionTitleID.offset().top,
					sideNavSectionTitleIDFromTop = sideNavSectionTitleIDOffset-scrollTop;

				// If element has hit the requested distance from top and the click event has reset or not fired
					if ( sideNavSectionTitleIDFromTop <= distanceFromTop && eventCheck == true ) {
						sideNavItemID
							.removeClass('inactive')
							.addClass('active')
							.siblings()
								.removeClass('active')
								.addClass('inactive');
					}

				// Set the scroll distance at breakpoints
					setScrollTopDistance();
			}

		// Click to add active class FAQ nav
			function faqNavigation() {
				$('body').on('click', '.side_nav_item', function(event) {

					// Set to false so the scroll distance above doesn't overrirde that adding of the active class
					eventCheck = false;
					
					$(this)
						.removeClass('inactive')
						.addClass('active')
						.siblings()
							.removeClass('active')
							.addClass('inactive');

					// This resets the eventCheck variable so the scroll event can still run to add active classes to FAQ nav
					setTimeout(function(){
						eventCheck = true;
					}, 1000);
					
					return false;
				});
			}
			faqNavigation();

		// Fix position FAQ nav and content section when it hits top
			$(window).scroll(function(event) {
				var scrollTop = $(this).scrollTop(),

					sideNavMod = $('.side_nav_mod'),
					sideNavModWidth = $('.side_nav_mod').get(0).getBoundingClientRect().width + "px", //Get extact width, not rounded
					sideNavModOffset = sideNavMod.offset().top,
					sideNavModFromTop = sideNavModOffset-scrollTop,

					sideNavSectionContainerOffset = sideNavSectionContainer.offset().top,
					sideNavSectionContainerFromTop = sideNavSectionContainerOffset-scrollTop;
						
				if ( sideNavSectionContainerFromTop <= distanceFromTop ) {

					sideNavMod.css({
						'position': 'fixed',
						'top': distanceFromTop+'px',
						'width': sideNavModWidth
					});

					sideNavSectionContainer.css({
						'marginLeft': sideNavModWidth
					});
				}
				else {
					sideNavMod.css({
						'position': 'relative',
						'top': '',
						'width': ''
					});

					sideNavSectionContainer.css({
						'marginLeft': ''
					});
				}

				// Set the scroll distance at breakpoints
				setScrollTopDistance();
			});

			smoothScrolling();
	}
/*--END FAQ NAVIGATION--*/
