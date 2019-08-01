n = int(input())
minimum = 0

if n // 100 != 0:
	minimum += n // 100
	n = n - (n // 100) * 100
if n // 20 != 0:
	temp = n // 20
	minimum += temp
	n -= temp * 20
if n >= 10:
	temp = n // 10
	minimum += temp
	n -= temp * 10
if n >= 5:
	temp = n // 5
	minimum += temp
	n -= temp * 5
if n != 0:
	minimum += n
print(minimum)


