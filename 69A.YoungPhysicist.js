var n = parseInt(readline());
var coordonate = [];
var x = [], y = [], z = [];
var sumX = 0, sumY = 0, sumZ = 0;

for (var i = 0; i < n; i++) {
	coordonate = readline().split(' ');

	x.push(parseInt(coordonate[0]));
	y.push(parseInt(coordonate[1]));
	z.push(parseInt(coordonate[2]));
	sumX += x[i];
	sumY += y[i];
	sumZ += z[i];
}

if (sumX == 0 && sumY == 0 && sumZ ==0) {
	print("YES");
} else {
	print("NO");
}