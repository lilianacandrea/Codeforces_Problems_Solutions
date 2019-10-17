n = int(input())
bus = list()
pair_of_seats = 1

for i in range(n):		
	row = input()
	row_seats = list(row)

	if pair_of_seats != 0:		
		if row_seats[0] + row_seats[1] == 'OO':
			bus.append('++' + row_seats[2] + row_seats[3] + row_seats[4])
			pair_of_seats -= 1
			continue

		if row_seats[3] + row_seats[4] == 'OO' :
			bus.append(row_seats[0] + row_seats[1] + row_seats[2] + '++')
			pair_of_seats -= 1
			continue

	bus.append(row_seats[0] + row_seats[1] + row_seats[2] +  row_seats[3]  +  row_seats[4])

if pair_of_seats == 0:
	print("YES")
	print('\n'.join(map(str, bus))) 
else:
	print("NO")



