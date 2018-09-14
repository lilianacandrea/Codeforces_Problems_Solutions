var problems = parseInt(readline());
var solved = 0;
var answers;

var sum;

for (var i = 0; i < problems; i++) {
	answers = readline().split(' ');
	sum = parseInt(answers[0]) + parseInt(answers[1]) + parseInt(answers[2]);
	if (sum >= 2) {
		solved = solved + 1;
	}
}

print(solved);