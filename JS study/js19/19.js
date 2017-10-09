var goods = {
	"28292" : {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png",
		"sklad" : "нет"
	},
	"282256" : {
		"name" : "Помидор",
		"cost" : 40,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sklad" : "да"
	},
	"2824566" : {
		"name" : "Клубника",
		"cost" : 60,
		"img" : "https://cdn1.iconfinder.com/data/icons/splash-of-fruit/128/fruiticons_buttons_strawberry-128.png",
		"sklad" : "да"
	}
}

console.log(goods);
var out = " ";
for (var key in goods){
	out += "Насзвание: "+ goods[key].name + "<br>";
	out += "Цена : " + goods[key].cost + "<br>";
	out += "Наличие : " + goods[key].sklad + "<br>";
	out += '<img src="' +goods[key].img + '">';
	out += "<hr>";
}

document.getElementById('out').innerHTML = out;