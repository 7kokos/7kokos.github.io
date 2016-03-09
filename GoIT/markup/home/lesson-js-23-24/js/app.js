requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
		'tmpl': 'tmpl'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	['jquery', 'tmpl', 'model', 'view', 'controller'],
	function(jquery, tmpl, model, view, controller) {

		var firstToDoList = ['JavaScript', 'HTML', 'CSS', 'jQuery'];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
);