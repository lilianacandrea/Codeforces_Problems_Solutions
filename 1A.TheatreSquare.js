var input = readline().split(' ');
var n = parseInt(input[0]);
var m = parseInt(input[1]);
var a = parseInt(input[2]);
var x = 0;
var y = 0;

if (n % a === 0) {
	x = n / a;
} else {
	x = Math.floor(n / a) + 1;
}

if (m % a === 0) {
	y = m / a;
} else {
	y = Math.floor(m / a) + 1;
}

print(x * y);
