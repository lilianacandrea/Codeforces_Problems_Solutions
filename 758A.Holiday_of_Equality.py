n = int(input())
welfare = input().split(' ')
welfare = list(map(int, welfare ))
max_value = max(welfare)
min_burles = 0

for i in range(n):
	temp = max_value - welfare[i] 
	min_burles += temp

print(min_burles)


