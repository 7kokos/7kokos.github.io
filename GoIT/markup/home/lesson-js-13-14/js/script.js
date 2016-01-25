'use strict'

$(function () {
	


	var info = [
		{
			question : "Вопрос #1 Сколько будет 2 + 2",
			answer   : [
			"Ответ 2",
			"Ответ 4",
			"Не знаю"
			],
			rightAnswer: {
				2:true
			}
		},
		{
			question : "Вопрос #2 Сколько будет 1 + 3",
			answer   : [
			"Ответ 4",
			"Ответ 3.14",
			"Это невозможно сложить"
			],
			rightAnswer: {
				1:true
			}
		},
		{
			question : "Вопрос #3 Выберите четные числа (несколько вариантов ответа)",
			answer   : [
			"Число 8",
			"Число 3",
			"Число 5",
			"Число 4"
			],
			rightAnswer: {
				1:true,
				4:true
			},

		}
		// {
		// 	question : "Вопрос #4 Выберите нечетные числа (несколько вариантов ответа)",
		// 	answer   : [
		// 	"Число 8",
		// 	"Число 3",
		// 	"Число 5",
		// 	"Число 4"
		// 	],
		// 	rightAnswer: {
		// 		2:true,
		// 		3:true
		// 	}
			
		// }
	];

	localStorage.setItem('data', JSON.stringify(info));

	var questions = JSON.parse(localStorage.getItem('data')); 
	
	var htmlQuestion = $('#questionsGenerate').html();
	var content = tmpl(htmlQuestion, {
	data: questions
	});
	$('.questions').append(content);







function checkAnswer(e) {
    // предотвращаем отправку формы
	e.preventDefault();
    // считаем что ответы правильные
    var error = false;
    
    
    var user = [];
    var userAnswered = {};
    
    for (var i = 0; i < questions.length; i++) {
        // галка
   		var inputs = $('.box' + i +' input:checkbox');
   		   		
   	for (var k = 0; k < inputs.length; k++) { 
        var checked = inputs[k].checked;
    //     // является ли вариант правильным
       
        var right = questions[i].rightAnswer[k+1] == true;
        
        // если отметка не является правильной
        if (checked !== right) {
        	userAnswered[k]=false;
            error = true;
                
        } else {
        	userAnswered[k]=true;
        };
	};
        user.push(userAnswered);
        var userAnswered = {};
   		
	};
        

    	
    	function modalWindow () {
    		var $modal = $('<div class="modalWindow animated bounceInDown"><h2 class="text-center">Результат теста ' + (error? 'негативный!' : 'положительный!' )+'</h2></div>');
    		var $overlay = $('<div class="modalWindow-overlay"></div>');
    		
    		$('body').append($modal);
    		$('body').append($overlay);
    		
    		var htmlQuestion = $('#questionsGenerate').html();
			
			var content = tmpl(htmlQuestion, {
				data: questions
			});
			
						
			$('.modalWindow').append(content);
			var $buttonOk = $('<button class="btn btn-md btn-success" style="float:right">OK!</button>');
			
			$('.modalWindow').append($buttonOk);

    		for (var i = 0; i < questions.length; i++) {
    			var inputs = $('.box' + i +' input:checkbox');
    			var inputsShowResult =  $('.modalWindow .box' + i +' input:checkbox');
    			
    			for (var k = 0; k < questions[i].answer.length; k++) {
    				
    				var checked = inputs[k].checked;
    			
    			if ((checked == true)) {
    				if ((user[i][k]) == true) {
	    				$(inputsShowResult[k]).attr({
	    					"disabled":true,
	    					"checked" : true	
	    					}).parent().append("<span> Правильный ответ!</span>").find("span").css({"color" : "green"});
					} else {
						$(inputsShowResult[k]).attr({
	    					"disabled":true,
	    					"checked" : true	
	    					}).parent().append("<span> Неправильный ответ!</span>").find("span").css({"color" : "red"});	

					}; 

    			} else {
    				$(inputsShowResult[k]).attr({
	    					"disabled":true,
	    					"checked" : false	
    			});
    			};

    		};
    		};

    		$overlay.one('click', hideModal);
    		$buttonOk.one('click', hideModal);

    		function hideModal() {
			$modal.removeClass('bounceInDown').addClass('hinge');
			setTimeout(function(){$modal.remove();}, 2000);
			$overlay.remove();
		};

    	};

    	modalWindow();

};

 


$('.check').on('click', checkAnswer);


});


