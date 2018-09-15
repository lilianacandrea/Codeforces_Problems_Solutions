var s = readline().split('+');

const bubbleSort = function(arr) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i <arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				var temporary = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temporary;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}
print(bubbleSort(s).join('+'));
