
$(function() {
	$('<div></div>').appendTo('body').addClass('container');
	$('<ul></ul>').appendTo('.container').addClass('tabs');
	for (var i = 1; i < 4; i++) {
		$('<li></li>').appendTo('.tabs').addClass('layer' + i);
		$('<a></a>').html('Tabs #' + i).appendTo('.layer' + i).addClass('btn btn-md btn-default');
	};
	for (var i = 1; i < 4; i++) {
		$('<div></div>').appendTo('.container').addClass('layer' + i);
	};
		$('div >.layer1').append('<p>Natus, dicta esse. Voluptas, unde. Est velit, suscipit.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui blanditiis omnis quia ducimus rem eius, minima, accusantium quasi iste eum at similique provident, porro atque adipisci ullam sunt consequuntur.</p>		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, voluptatem.</p>');
		
		$('div >.layer2').append('<p>Quisquam magnam ad similique praesentium assumenda cum cumque voluptatum, voluptas unde rem, eius ipsum debitis explicabo maiores molestias aut vel ipsa eum. Facere reprehenderit quos aperiam perspiciatis, necessitatibus consequuntur ut unde animi aliquam voluptas. Inventore et modi vero sunt, illum accusantium.	</p>		<p> Natus delectus neque odio consequatur voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, in.</p>		<p>Voluptate, ut, consequuntur.</p>');
		
		$('div >.layer3').append('<p>Reprehenderit perspiciatis sapiente, asperiores dolorum ea, distinctio quisquam officia, error assumenda non voluptatum ut hic sunt deserunt aspernatur ex, enim eius optio deleniti mollitia delectus sed iure dolore ratione natus. A, impedit.</p>	<p>Possimus consequuntur quidem perspiciatis ipsa officiis aliquam nam vel, voluptatum modi ea non architecto natus obcaecati molestias laudantium consectetur. Excepturi nihil nulla eius fuga! Ipsam consequuntur perspiciatis eos magnam, molestiae qui praesentium impedit nihil? Perspiciatis minima quia consectetur hic.</p>');

	

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

