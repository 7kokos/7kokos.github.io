'use strict';

$(function () {
    
		$('.pagination').hide();

	    $('#f').submit(function(e){
	    	
	        e.preventDefault();
			
	        function googleSearch (i) {
    			$('.results').html('');
	        	var query = encodeURIComponent($('#q').val());	  
	        	var urlFullFistPart = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=5&start='+ (i*5*2) +'&q='+ query + '&callback=GoogleCallbackFirstPart&context=?';
	        	var urlFullSecondPart = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=5&start='+ ((i*5*2)+5) +'&q='+ query + '&callback=GoogleCallbackSecondPart&context=?';
	           
	       		$.ajax({
	            	url: urlFullFistPart,
	            	dataType : "jsonp"
	       		});

	       		$.ajax({
	          	  url: urlFullSecondPart,
	          	  dataType : "jsonp"
	       		});
	        	
    			setTimeout(function() {
					$('.pagination').show();
    			
    			},1000);
	        };
	       	
			$('.pagination li a').unbind('click');
				
			$('.pagination li a').on('click', function (e) {
				
				e.preventDefault();
				var k = $(this).parent().index();
	    		// console.log('k', k);
	    		googleSearch(k);

			});

    		googleSearch(0);

    		
	    });

	}   
	
	
);

 
function GoogleCallbackFirstPart (func, data) {
	// console.log(data)
	var htmlResult = $('#resultsGenerate').html();
    var content = tmpl(htmlResult, data);
	$('.results').append(content);
    
};

function GoogleCallbackSecondPart (func, data) {
	setTimeout(function() {
		// console.log(data);
		var htmlResult = $('#resultsGenerate').html();
	    var content = tmpl(htmlResult, data);
		$('.results').append(content);

	},100);
    
};








// __PROTO__

function human(name,age,gender,weight, money) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.weight = weight;
	this.money = money
};

var ivan = new human('Ivan', 25, 'male', 80, 15000);
console.log('human Ivan ',ivan);

var lena = new human('Lena', 20, 'female', 50, 1000);
console.log('human Lena ', lena);

console.log('----------------------');
var worker = {
	job: 'factory',
	work: function () {
		return this.money += 5000 
	}
}

var student = {
	university : 'NTUU KPI',
	showFilm : function() {
		return this.money -= 50
	}
}


worker.__proto__=ivan;

student.__proto__=lena;


console.log('Worker Ivan ', worker);
console.log('Ivan is working now, money +5000$', worker.work());
console.log('Ivan is working now, money +5000$', worker.work());
console.log('Ivan is working now, money +5000$', worker.work());
console.log('----------------------');

console.log('Student Lena', student);
console.log('Lena is showing film now, money -50$', student.showFilm());
console.log('Lena is showing film now, money -50$', student.showFilm());
console.log('Lena is showing film now, money -50$', student.showFilm());


