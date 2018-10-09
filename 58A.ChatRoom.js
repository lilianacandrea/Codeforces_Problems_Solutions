function chatRoom() {
	var str = readline().split('');
	var hello = ["h", "e","l", "l", "o"];
	var i = 0;
	var k = 0;

	while (hello.length > k && str.length > i) {	
		if (str[i] == hello[k]) {		
			k++;
		}
		i++;
	}

	if (k == hello.length) {
		return "YES";
	}
	return "NO";
}

print(chatRoom());
