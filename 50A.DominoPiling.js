var input = readline().split(' ');
var m = parseInt(input[0]);
var n = parseInt(input[1]);
var board = m * n;

if (board % 2 == 0) {
	print (board / 2);
} else {
	print ((board - 1) / 2);
}