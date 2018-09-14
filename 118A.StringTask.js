var word = readline().split('');
var vowels = [];
var consonant = [];

for (var i = 0; i < word.length; i++) {
	if (word[i].toLowerCase() == "a" || word[i].toLowerCase() == "o" || 
		word[i].toLowerCase() == "y" || word[i].toLowerCase() == "e" || 
		word[i].toLowerCase() == "u" || word[i].toLowerCase() == "i") {
		vowels += word[i];

	} else {
		consonant += "." + word[i];
	}
}

print(consonant.toLowerCase());
