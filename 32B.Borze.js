var borze = readline();
var decodedN = [];
var i = 0;

while (i < borze.length) {
	if (borze[i] == ".") {
		decodedN += "0";
		i++;
	}
	else if(borze[i] == "-" && borze[i + 1] ==".") {
		decodedN += "1";
		i += 2;
	} else if(borze[i] == "-" && borze[i + 1] =="-") {
		decodedN += "2";
		i += 2;
	}
}

print(decodedN);