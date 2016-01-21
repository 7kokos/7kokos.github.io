(function ($) {
	
	$.fn.wowCarousel = function (options) {

		var defaults = {
			Duration: '500',
			wrap: ''
		};

		var settings = $.extend(defaults,options);

		var leftUIEl = $('.carousel-arrow-left');
	    var rightUIEl = $('.carousel-arrow-right');
	    var elementsList = $('.carousel-list');
	 
	    var pixelsOffset = 325;
	    var currentLeftValue = 0;
	    var elementsCount = elementsList.find('li').size();
	    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
	    var maximumOffset = 0;
	 
	    leftUIEl.on('click', function() {
	    	if (currentLeftValue != maximumOffset) {
	        currentLeftValue += 325;
	        elementsList.animate({ left : currentLeftValue + "px"}, settings.duration);
	    } else {
	    	if (settings.wrap == 'circular') {
	    	currentLeftValue = currentLeftValue + minimumOffset;
	    	elementsList.animate({ left : (currentLeftValue) + "px"}, settings.duration);
	    	};
	    	};
	    });
	 
	    rightUIEl.on('click', function() {
	    	if (currentLeftValue != minimumOffset) {
	        currentLeftValue -= 325;
	        elementsList.animate({ left : currentLeftValue + "px"}, settings.duration);
	    } else {
	    	if (settings.wrap == 'circular') {
	    	currentLeftValue = currentLeftValue - minimumOffset;
	    	elementsList.animate({ left : (currentLeftValue) + "px"}, settings.duration);
	    	};
	    };


	    });

			return this;
		};

})(jQuery);




























		// var $link = this;
		// var $body = $('body');
		// var $modal;
		// var $overlay;
		

		// function showModal(e) {
		// 	e.preventDefault();
		// 	var href = $link.attr('href');
		// 	$modal = $('<div class="fancybox-modal"><img src="' + href + '"><p style="font-size:'+settings.fontSize+'">Some text</p></div>');
		// 	$body.append($modal);
		// 	$overlay = $('<div class="fancybox-overlay"></div>');
		// 	$overlay.one('click', hideModal);
		// 	$body.append($overlay);
		// 	$overlay.css ({
		// 		'background-color':settings.overlayColor
		// 	})
		// };


		// function hideModal() {
		// 	$modal.remove();
		// 	$overlay.remove();
		// };

		// $link.on('click', showModal);
		





