var n = parseInt(readline());
var stones = readline().split('');
var minimum = 0;

for (var i = 0; i < stones.length; i++) {
	if (stones[i] == stones[i + 1]) {
		minimum += 1;
	}
}
print (minimum);

// var i = 0;

// if (stones.length % 2 == 1 && stones.length == 3) {
// 	minimum = stones.length % 2;
// 	print (minimum);
// } else if (stones.length % 2 == 1){
// 	minimum = stones.length - 1;
// 	print (minimum);
// } else {
// 	minimum = 0;
// 	print (minimum);
// }


// while (stones[i] == stones.length) {
// 	if (stones[i] == stones[i + 1]) {
// 		minimum++;
// 		print (minimum);
// 		// break;
// 	} else {
// 		minimum = 0;
// 		print (minimum);
// 		break;
// 	}
// 	i++;
// }
// print (minimum);