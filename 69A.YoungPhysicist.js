var n = parseInt(readline());
var x = 0, y = 0, z = 0;

for (var i = 0; i < n; i++) {
	var coordonate = readline().split(' ');

	x += parseInt(coordonate[0]);
	y += parseInt(coordonate[1])
	z += parseInt(coordonate[2]);
}

if (x == 0 && y == 0 && z ==0) {
	print("YES");
} else {
	print("NO");
}