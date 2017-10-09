document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
	// прямоугольник
	var div = document.getElementById('test');
	// получаю textarea
	var out = document.getElementById('out');
	// console.log(this.value);
	div.style.borderRadius = this.value + 'px';
	// bodrer-radius: 36px;
	out.innerHTML = "-webkit-bodrer-radius: " +this.value+'px;\n';
	out.innerHTML += "bodrer-radius: " +this.value+'px;';
}