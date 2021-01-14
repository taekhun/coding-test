n, m, k = map(int, input().split())
data = list(map(int, input().split()))
data.sort()  # 입력받은 수들 정렬하기

first = data[n-1]  # 가장 큰 수
second = data[n-2]  # 두 번째로 큰 수

# 가장 큰 수가 더해지는 횟수 계산
count = int(m/(k+1)) * k
count += m % (k+1)  # k+1로 나누어 떨어지지 않는 수

result = 0
result += (count) * first  # 가장 큰 수 더하기
result += (m-count) * second  # 두 번째로 큰 수 더하기

print(result)
