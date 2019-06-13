n = int(input())
hate = "I hate that "
love = "I love that "
feelings = ""

for i in range(n - 1):
	if (i % 2 == 0):
		feelings += hate
	else:
		feelings += love

if n == 1:
	print("I hate it")
elif n % 2 == 0:
	print(feelings + "I love it")
else:
	print(feelings +  "I hate it")



