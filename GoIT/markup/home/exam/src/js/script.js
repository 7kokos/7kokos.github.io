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
		var dataForModal = {
			images: []
		};

		function renderList(queryPic) {
			var index = 7;
			for (var i = 0; i < index; i++) {
				var f = function(i) {

					$.ajax({
						type: "GET",
						dataType: "json",
						cache: false,
						url: 'http://api.pixplorer.co.uk/image?word=' + queryPic + '&amount=1&size=s',
						success: function(data) {

							dataForModal.images.push(data.images[0]);
							
							if (dataForModal.images.length > index) {
								dataForModal.images.splice(0, 1);
							}

							if (i == (index - 1)) {
								
								var piclist = tmpl($('#piclist-template').html(), dataForModal);

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

						}
					});

				}(i);
			}
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

		if (!(document.all && !window.atob)) {
			function showModal() {
				var index = $(this).index();
				var $modal = $('<div class="modalWindow animated zoomIn"><div class="modalWindow__box"><img class="modalWindow__img" src="' + dataForModal.images[index].imageurl + '" alt=""> </div></div>');
				var $overlay = $('<div class="modalWindow-overlay"></div>');

				$('body').append($modal);
				$('body').append($overlay);

				$modal.one('click', hideModal);

				function hideModal() {
					$modal.removeClass('zoomIn').addClass('zoomOut');
					setTimeout(function() {
						$modal.remove();
					}, 500);
					$overlay.remove();
				};
			};
			$('.ideas').on('click', '.grid-item', showModal);
		}



	});

})(jQuery);