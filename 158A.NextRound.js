var input = readline().split(' ');
var n = parseInt(input[0]);
var k = parseInt(input[1]) - 1;
var scores = readline().split(' ');
var a = 0;

for (var i = 0; i < scores.length; i++) {
	scores[i] = parseInt(scores[i]);
}

while (scores[a] >= scores[k] && scores[a] != 0) {
	a++;
}
print (a);