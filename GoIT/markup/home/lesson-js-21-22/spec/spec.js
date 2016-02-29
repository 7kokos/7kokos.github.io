jasmine.getFixtures().load('../../../index.html');

describe('should show questions header', function() {

	beforeEach(function() {
		jasmine.getFixtures().load('../../../index.html');

	});


	it('Question #1', function() {
		var questionText = $('.box0 h4').html();
		expect(questionText).toEqual('Вопрос #1 Сколько будет 2 + 2');
	});

	it('Question #2', function() {
		var questionText1 = $('.box1 h4').html();
		expect(questionText1).toEqual('Вопрос #2 Сколько будет 1 + 3');
	});

	it('Question #3', function() {
		var questionText2 = $('.box2 h4').html();
		expect(questionText2).toEqual('Вопрос #3 Выберите четные числа (несколько вариантов ответа)');
	});



});

describe('should show modal window', function() {

	beforeEach(function() {
		jasmine.getFixtures().load('../../../index.html');
		$('.check').trigger( "click" );
  });
	

	
	it('Modal window result', function() {
		var headerModalwindow = $('.modalWindow h2').html();
		expect(headerModalwindow).toEqual('Результат теста негативный!');
	});

	

});


describe('should data info', function() {

		
	it('check data info', function() {
		jasmine.getFixtures().load('../../../index.html');
		var result = {
			question: "Вопрос #1 Сколько будет 2 + 2",
			answer: [
				"Ответ 2",
				"Ответ 4",
				"Не знаю"
			],
			rightAnswer: {
				2: true
			}
		};
		expect(testdata[0]).toEqual(result);
	});

});


