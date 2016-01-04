
$(function() {

$('ul.tabs li').css('cursor', 'pointer');

$('.tabs li').on('click', (function(){
	var thisClass = this.className.slice(0,7);
	console.log(thisClass);
	$('div.layer1').hide();
	$('div.layer2').hide();
	$('div.layer3').hide();
	$('div.' + thisClass).show();
	$('.tabs li').removeClass('active');
	$(this).addClass('active');
	}));

});

