define(
	'view', 
	['jquery', 'model'],
	function() {
		function View(model) {
			var self = this;

			function init() {
				var wrapper = tmpl($('#wrapper-template').html());

				$('.container').append(wrapper);

				self.elements = {
					input: $('.controlls__item-value'),
					addBtn: $('.controlls__item-add'),
					listContainer: $('.todo-list'),
					inputItem: $('.todo-list__input')
				};

				self.renderList(model.data);

			};

			self.renderList = function(data) {
				var list = tmpl($('#list-template').html(), {
					data: data
				});

				self.elements.listContainer.html(list)
			};

			init();

		};
		return View;
	}
);