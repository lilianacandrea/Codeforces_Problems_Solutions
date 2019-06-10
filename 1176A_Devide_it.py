t = int(input())

def devideIt (n):
	count = 0
	while n != 1:
		if n % 2 == 0:
			n = n // 2
		elif n % 3 == 0:
			n = (2 * n) // 3
		elif n % 5 == 0:
			n = (4 * n) // 5
		else:
			return -1
		count+=1
	return count

for i in range(t):
	print(devideIt(int(input())))
