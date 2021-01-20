n = input()
numbers = list(map(int, input().split()))
p, q = map(int, input().split())

sum = 0
for i in range(p-1, q):
    sum += numbers[i]

print(sum)
