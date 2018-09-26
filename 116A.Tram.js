var n = parseInt(readline());
var passengers = [];
var max_capacity = 0;
var result = 0;

for (var i = 0; i < n; i++) {
    passengers = readline().split(' ');
    result = result - parseInt(passengers[0]) + parseInt(passengers[1]);
	max_capacity = Math.max(result, max_capacity);
}
print (max_capacity);