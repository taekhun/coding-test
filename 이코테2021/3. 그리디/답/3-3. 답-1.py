N, M = map(int, inpu().split())

result = 0
for i in range(N):
    data = list(map(int, input().split()))
    min_value = min(data)  # 최소값 갱신
    result = max(result, min_value)  # result vs min_value

print(result)
