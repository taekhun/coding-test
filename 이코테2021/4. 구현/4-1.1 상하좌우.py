from collections import deque

N = int(input())
input_keys = list(map(str, input().split()))
dq = deque(input_keys)
x, y = 1, 1

while(len(dq) != 0):
    key = dq.popleft()
    if(key == 'R' and y != N):
        y += 1
        print(x, y)
    elif(key == "L" and y != 1):
        y -= 1
        print(x, y)
    elif(key == "U" and x != 1):
        x -= 1
        print(x, y)
    elif(key == "D" and x != N):
        x += 1
        print(x, y)

print(x, y)
