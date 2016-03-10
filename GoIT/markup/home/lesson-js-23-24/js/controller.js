define(
	'controller', ['model', 'view'],
	function() {
		function Controller(model, view) {
			var self = this;

			view.elements.addBtn.on('click', addItem);

			view.elements.input.on('keypress', function(e) {
				if (e.which == 13) {
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}
			});

			view.elements.listContainer.on('click', '.todo-list__item-delete', removeItem);

			view.elements.listContainer.on('dblclick', '.todo-list__input', function() {
				$(this).addClass('active').removeAttr('disabled');
				$(this).one('focusout', renameItem);
				$(this).on('keypress', function(e) {

					if (e.which == 13) {
						var item = $(this).val();
						var index = $(this).parent().index();

						model.renameItem(item, index);
						$(this).removeClass('active');
						view.renderList(model.data);
					};
				});
				$(this).parent().mouseleave(function(event) {
					
					$('body').one('click', function() {
						$('.todo-list__input').removeClass('active').attr({
							'disabled': true
						});
					});
				});
			});


			function addItem() {
				var newItem = view.elements.input.val();

				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};

			function removeItem() {
				var item = $(this).attr('data-value');

				model.removeItem(item);
				view.renderList(model.data);
			};

			function renameItem() {
				var item = $(this).val();
				var index = $(this).parent().index();

				model.renameItem(item, index);
				view.renderList(model.data);
			};
		};
		return Controller;
	}
);
