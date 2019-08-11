n = int(input())
outcome = input()
temporarily = list(outcome)
countA = 0
countD = 0

for i in range(n):
	if temporarily[i] == 'A':
		countA += 1
	elif temporarily[i] == 'D':
		countD += 1

if countA == countD:
	print("Friendship")
elif countA > countD:
	print("Anton")
else:
	print("Danik")

