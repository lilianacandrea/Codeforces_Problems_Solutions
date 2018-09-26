var n = parseInt(readline());
var passengers = [];
var a = [];
var b = [];
var max_capacity = 0;
var result = 0;

for (var i = 0; i < n; i++) {
	passengers = readline().split(' ');

	a.push(parseInt(passengers[0]));
	b.push(parseInt(passengers[1]));
}

for (var i = 0; i < n; i++) {
	result = result - a[i] + b[i];
	if (result > max_capacity) {
		max_capacity = result;
	}
}
print (max_capacity);