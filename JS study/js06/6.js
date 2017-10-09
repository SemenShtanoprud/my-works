function out() {
	var p;
	p = document.getElementById("out");
	// p.innerHTML = "Hello";
	// add text
	// p.innerHTML += " Hello";
	// beforeBegin - перед открывающим тегом
	// p.insertAdjacentHTML('beforeBegin',' Hi ');
	// afterBegin - после открывающего тега, перед текстом
	// p.insertAdjacentHTML('afterBegin',' Hi ');
	// beforeEnd - перед закрывающим тегом, после текста
	// p.insertAdjacentHTML('beforeEnd',' Hi ');
	// afterEnd - после закрывающим тега
	// p.insertAdjacentHTML('afterEnd',' Hi ');
	p.outerHTML = "<div class='one'>hello</div>"
}