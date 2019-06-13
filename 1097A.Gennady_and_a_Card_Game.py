card = list(input())
hand = input().split(' ')
yes = False

for i in range(5):
	n = list(hand[i])
	if card[0] == n[0] or card[1] == n[1]:
		yes = True
		break
	else:
		yes = False

if yes == True:
	print("YES")
else:
	print("NO")
