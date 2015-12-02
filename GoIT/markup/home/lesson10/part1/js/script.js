var x = +prompt('Введите число, которое будем возводить в степень');
var n = +prompt('Введите степень, в которую будем возводить');


function pow(x, n) {
	
	var result = 1;
	
    for (var i = 0; i < Math.abs(n); i++) {
    result = result * x;
  }
  
  if (x != 0) {
    if (n>0) {
    	return result;
    } else {
    	return 1/result;
    }
  } else {
  	  console.log('Данные не введены или возводим в степень 0!');
      return 0; 
    }
 
}


var resultPow = pow(x, n);

console.log('Результат: ', resultPow);



