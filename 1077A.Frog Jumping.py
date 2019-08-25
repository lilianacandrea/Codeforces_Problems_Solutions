
frogs = int(input())
lines = list()
output = list()
a = 0
b = 0
k = 0
result = 0

for i in range(frogs):
	lines = input().split(' ')
	a = int(lines[0])
	b = int(lines[1])
	k = int(lines[2])

	result = a * (k // 2 + k % 2) - b * (k // 2)
	output.append(result)

for i in range(len(output)):
	print(output[i])

