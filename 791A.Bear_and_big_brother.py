kilos = input().split(' ')
a = int(kilos[0])
b = int(kilos[1])
count = 0

while a <= b:
	a *= 3
	b *= 2
	count += 1
	
print(count)

