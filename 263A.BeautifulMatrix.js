var matrix = [];

function moves(matrix) {
	for ( var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++){
			if (matrix[i][j] == "1") {
				return Math.abs(i - 2) + Math.abs(j - 2);
			}
		}
	}
}

for (var i = 0; i < 5; i++) {
	matrix.push(readline().split(' '));
}

print(moves(matrix));