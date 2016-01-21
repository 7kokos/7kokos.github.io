
$(function () {
	
	var cats  = [
	{
		catName: 'cat1',
	 	description: 'Cupiditate perferendis sapiente illo fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nemo!'
	}, 
	{
		catName: 'cat2',
	 	description: 'Aliquid, nemo!. Lorem ipsum dolor sit amet.'

	},
	{
		catName: 'cat3',
	 	description: 'Pariatur ab ad modi quibusdam quis quasi, itaque voluptatibus nulla sequi. Deleniti perspiciatis labore blanditiis, expedita aspernatur quidem, consequuntur aliquid quam doloribus.'

	},
	{
		catName: 'cat4',
	 	description: 'Cupiditate perferendis sapiente illo fugit. Aliquid, nemo!'

	},
	{
		catName: 'cat5',
	 	description: 'Unde doloremque optio ipsa repellendus minus maiores, tempora rerum alias sint nemo provident, esse, exercitationem architecto consectetur illum saepe odio impedit velit laudantium dolorum fuga quo error id. Eaque fugiat tempore, nostrum nobis voluptatem neque possimus dolorem tenetur maiores sequi hic eum!'

	}
	];	


	$('.viewAll').on('click', function() {

		var htmlCard = $('#cardCatAll').html();
		var content = tmpl (htmlCard, {
		data: cats
		});
		$('.content').append(content)
	});

	$('.viewOne').on('click', function() {
		var htmlCard = $('#cardCatOne').html();
		var content = tmpl (htmlCard, {
		data: cats
		});
		$('.content').append(content)
		
	});


});
