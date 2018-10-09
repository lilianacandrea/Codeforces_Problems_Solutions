var input = readline().split(' ');
var n = parseInt(input[0]);
var t = parseInt(input[1]);
var queue = readline().split('');
var keep = queue.slice();

for (var i = 0; i < t; i++) {
	for (var j = 0; j < n - 1; j++) {
		if (queue[j] == "B" && queue[j + 1] == "G") {
			keep[j] = "G";
			keep[j + 1] = "B";	
		}
	}
	queue = keep.slice();
}
print (keep.join(''));