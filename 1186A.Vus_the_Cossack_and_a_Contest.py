n = input().split(' ')
people = int(n[0])
pens = int(n[1])
notebooks = int(n[2])

if people > pens or people > notebooks:
	print("No")
else:
	print("Yes")