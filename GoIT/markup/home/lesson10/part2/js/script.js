
var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Заполните массив. Пользователь №'+(i+1));
	if (arr[i] === '') {
		alert('Заполните имя №'+(i+1) + ' еще раз!');
		i = i-1;
	}
}

console.log(arr);

var userName = prompt('Введите имя пользователя для входа');

var flag = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] != null) { 
		
		if (arr[i] === userName) {
    		flag = true;
  		}
  	} else { 
  			alert('Не корректно введены данные имя №'+ (i+1));
 			
 	}
}


if (userName != null) {
	if (flag) {
		alert(userName + ', вы успешно вошли!');
	} else {
   	alert('Ошибка. Пользователя '+ userName +' не существует в массиве!');
} 
} else {
	alert('Введите корректно имя пользователя для входа'); 
} 




