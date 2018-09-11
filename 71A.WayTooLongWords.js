var n = readline();
var words = [];

for (var i = 0; i < n; i++) {
	words[i] = readline();
}

for (var i = 0; i < n; i++) {
	if (words[i].length > 10) {
		print (words[i][0] + (words[i].length - 2) + words[i][words[i].length - 1]);
	} else {
		print (words[i]);
	}
}