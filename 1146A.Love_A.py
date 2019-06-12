word = input()
temporarily = list(word)
char_a = 0

for i in range(len(temporarily)):
	if temporarily[i] == 'a':
		char_a += 1
if char_a > (len(temporarily) / 2):
	print(len(temporarily))
elif char_a == (len(temporarily) / 2):
	print(len(temporarily) - 1)
else:
	print(char_a + (char_a - 1))