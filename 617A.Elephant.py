distance = int(input())
steps = 0

while distance != 0:
	if distance >= 5:
		distance -= 5
		steps += 1
	elif distance >= 4:
		distance -= 4
		steps += 1
	elif distance >= 3:
		distance -= 3
		steps += 1
	elif distance >= 2:
		distance -= 2
		steps += 1
	else:
		distance -= 1
		steps += 1
print(steps)	

