n = input().split(' ')
number = int(n[0])
subtractions = int(n[1])
lastdigit = 0

while subtractions != 0:
	lastdigit = number % 10
	if lastdigit != 0:
		number -= 1
	elif lastdigit == 0:
		number = number // 10	
	subtractions -= 1

print(number)



