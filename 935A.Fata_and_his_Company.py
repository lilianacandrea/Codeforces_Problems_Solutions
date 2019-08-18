n = int(input())
choices = 0
i = 1

while i < n:
	temp = int(n // i)
	if temp * i == n:
		choices += 1
	i += 1
print(choices)
