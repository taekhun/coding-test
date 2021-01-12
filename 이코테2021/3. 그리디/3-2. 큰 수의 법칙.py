# 나의 풀이
# (30+5)소요

N, M, K = input('문자열 3개 입력하세요').split()
N = int(N)
M = int(M)
K = int(K)
numList = list(map(int, input().split()))
result = 0
count = M

numList.sort(reverse=True)

while(count):
    if(count >= K):
        result += numList[0] * K
        count -= K
    else:
        result += numList[0]*count
        break

    result += numList[1]*1
    count -= 1


# print(numList)
print(result)
