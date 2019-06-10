n = int(input())
n_answers = input().split(' ')

found_one = False

for i in range(n):
	if n_answers[i] == '1':
		found_one = True
		break

if found_one:
	print("HARD")
else:
	print("EASY")
