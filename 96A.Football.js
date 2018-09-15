function snitzi() {
	var football = readline().split('');
	var total = 1;
	var i = 1;

	while (football[i] == football.length) {
		if (football[i - 1] == football[i]) {
			total += 1;

			if (total == 7) {
				return "YES";
			}
		} else {
			total = 1;
		}
		i++;
	}
	return "NO";
}

print(snitzi());