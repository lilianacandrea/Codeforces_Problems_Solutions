var firstWord = readline().split('');
var secondWord = readline().split('');
var result;

for (var i = 0; i < firstWord.length; i++) {
	if(firstWord[i].toLowerCase() < secondWord[i].toLowerCase()) {
		result = -1;
		break;
	} else if (firstWord[i].toLowerCase() > secondWord[i].toLowerCase()) {
		result = 1;
		break;
	} else if (firstWord[i].toLowerCase() == secondWord[i].toLowerCase()){
		result = 0;
		continue;
	} 
}
print (result);
