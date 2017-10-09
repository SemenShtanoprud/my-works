
var m = {
	"name": "Alex",
	"age": 67,
	"id": "22334d",
	"sex": "male"
};
var m2 = {
	"name": "Alex",
	"age": 24,
	"id": "22334d",
	"sex": "male",
	"year": function() {
		return 2017 - this.age;
	}
};
// console.log(m["name"]);
// console.log(m.name);
// var a = "name";
// console.log(m[a]);
console.log(m2.year());

var man = {
	"mas" : [ 5, 6],
	"sum" : function() {
		var sum = 0;
		for (i=0; i<this.mas.length; i++){
			sum = sum + this.mas[i];
		}	
		return sum;
	}
}	

console.log(man.sum()); 