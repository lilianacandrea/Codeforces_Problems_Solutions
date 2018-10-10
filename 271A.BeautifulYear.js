var year = parseInt(readline());

while (true) {
	year++;

	var a = parseInt(year / 1000);
	var b = parseInt(year / 100 % 10);
	var c = parseInt(year / 10 % 10);
	var d = parseInt(year % 10);

	if (a != b && a != c && a != d && b != c && b != d && c != d) {	
		break;
	}
}
print(year);