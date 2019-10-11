t = input().split(' ')
n = int(t[0])
m = int(t[1])
k = int(t[2])
l = int(t[3])
cnt = 0
result = -1

if m <= n:
	cnt = round((l + k) / m)
	while cnt * m <= n:
		if cnt * m - k >= l:
			result = cnt
			break
		cnt += 1
print(result)