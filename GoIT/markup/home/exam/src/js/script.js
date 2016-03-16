(function($) {

	$.support.cors = true;

	$(function() {

		$('.jcarousel').jcarousel({
			animation: 'slow',
			wrap: 'circular'
		})

		.jcarouselAutoscroll({
			interval: 5000,
			target: '+=1',
			autostart: true
		});

		$('.jcarousel-control-prev')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.jcarousel-control-next')
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});



		var queryPic = '';

		function renderList(queryPic) {

			$.ajax({
				url: 'http://api.pixplorer.co.uk/image?word=' + queryPic + '&amount=7&size=tb',
				success: function(data) {
					console.log(data);
					var piclist = tmpl($('#piclist-template').html(), data);

					$('.grid').remove();

					$('.ideas .wrapper').append(piclist);
					$('.grid').isotope({
						itemSelector: '.grid-item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}
					});

				}
			});
		}

		$('#f').submit(function(e) {

			e.preventDefault();
			var query = encodeURIComponent($('.search__input').val());
			renderList(query);

		});

		renderList();

		// $('.grid').isotope({
		// 	itemSelector: '.grid-item',
		// 	layoutMode: 'masonry',
		// 	masonry: {
		// 		gutter: 20
		// 	}
		// });

	});

})(jQuery);