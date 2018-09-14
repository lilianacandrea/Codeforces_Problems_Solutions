var n = parseInt(readline());
var operator = [];
var x = 0;

for (var i = 0; i < n; i++) {
	operator[i] = readline();

	if (operator[i] == "++X") {
		++x;
	} else if (operator[i] == "X++") {
		x++;
	} else if (operator[i] == "--X") {
		--x;
	} else if (operator[i] == "X--") {
		x--;
	}
}

print (x);