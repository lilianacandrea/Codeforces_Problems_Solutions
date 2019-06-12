n = int(input())
magnets = []
countgroups = 1

for i in range(n):
	magnets.append(input())

for i in range(n - 1):
	if magnets[i] == magnets[i + 1]:
		continue
	else:
		countgroups += 1
	
print(countgroups)