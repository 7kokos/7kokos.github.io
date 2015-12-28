
$(function() {
	$('<div></div>').appendTo('body').addClass('container');
	$('<form></form>').appendTo('.container').addClass('form-horizontal');
	
	for (var i = 1; i < 4; i++) {
		$('<div></div>').appendTo('.form-horizontal').addClass('form-group');
		$('<label></label>').appendTo('.form-group:nth-child(' + i + ')').addClass('col-sm-2 control-label')
		.attr({
			'for':'text'+i}	
			);
		$('<div></div>').appendTo('.form-group:nth-child(' + i + ')').addClass('col-sm-10');
		$('<input></input>').appendTo('.form-group:nth-child(' + i + ')'+'> .col-sm-10').addClass('form-control')
		.attr({
			'type':'text',
			'id':'text'+i,
			'placeholder': 'Please enter this field'

		});
	};

	$('.form-group:first-child > label').html('Firstname');
	$('.form-group:nth-child(2) > label').html('Lastname');
	$('.form-group:nth-child(3) > label').html('Address');

	$('<button>Show all tooltips</button>').appendTo('form').addClass('btn btn-lg btn-default');
	

	var k = 0;	
	$('button').on('click', (function(e){
		e.preventDefault();
		console.log($('span'));
		if (k ===0) {
			for (var i = 1; i < 4; i++) {
				$('.form-group:nth-child(' + i + ')'+'> .col-sm-10')
				.append($('<span>Please enter ' + ($('.form-group:nth-child(' + i + ')'+'> .col-sm-10').parent().find('label').html()) + '</span>').addClass('tooltips'));
				};
		
			k++;
				} else {
					$('span').remove();
					k = 0;

				};

		}));
	$('.col-sm-10').hover(
  		function() {
  		$('span').remove();
  		k=0;
  	   	$(this).append($('<span>Please enter ' + ($(this).parent().find('label').html()) + '</span>').addClass('tooltips'));
    
  		}, function() {
    		$(this).find( 'span:last' ).remove();
  		}
	);

});

