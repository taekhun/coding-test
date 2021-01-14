import time

N, M = map(int, input().split())
array = [[] * M for _ in range(N)]  # 2차원 리스트 초기화
firstArray = []

for i in range(N):
    array[i] = list(map(int, input().split()))
    array[i].sort()
    firstArray.append(array[i][0])
firstArray.sort(reverse=True)

print(firstArray[0])
