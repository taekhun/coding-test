n, m = map(int, input().split())
N = 1
M = 1

while m >= 1:
    N *= n
    M *= m
    n -= 1
    m -= 1

print(int(N/M))
