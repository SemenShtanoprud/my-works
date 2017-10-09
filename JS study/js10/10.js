function f1() {
	var p,p1;
	p = document.getElementById('out');
	p1 = document.getElementById('out1');
	var i=0;
	while(i<50){
		i++;
		p.innerHTML += i + " ";
		// i=i+1;
	}
	var j=0;
	do{
		p1.innerHTML +=j + " ";
		j++
	}
	while (j<30);

}