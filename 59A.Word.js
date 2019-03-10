input = readline();
var len = input.length;
var lowercase = 0
var uppercase = 0;

for (var i = 0; i < input.length; i++) {

	if (/[A-Z]/.test(input.charAt(i))) 
	{
		uppercase++;	
	} else {
		lowercase++;
	}
}

if (uppercase > lowercase)
{
	print(input.toUpperCase());
} else {
	print(input.toLowerCase());
}