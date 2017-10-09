var a, b;
a = 9;
b = 8;

// if (a>b);  //а больше b
// if (a<b);  //а меньше b
// if (a>=b); //а больше или равно b
// if (a<=b); //а меньше или равно b
// if (a==b); //проверка на равенство
// if (a!=b); //проверка на не равенство
// if (a>b){
// 	alert("Первое число больше");
// }else if (a==b){
// 	alert("Числа ровны");
// }else{
// 	alert("Второе число больше");
// }
function f1() {
	var n, p;
	n = document.getElementById('num1').value;
	p = document.getElementById('out');
	n = parseInt(n);
	if(n==100){
		p.innerHTML = "Число равно 100";
	}else if (n<100){
		p.innerHTML = "Число меньше 100";
	}else{
		p.innerHTML = "Число больше 100";
	}
}