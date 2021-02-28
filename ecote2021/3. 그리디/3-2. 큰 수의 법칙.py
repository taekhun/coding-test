# P.92
# (30+5)소요
import time

N, M, K = input('문자열 3개 입력하세요').split()
N = int(N)
M = int(M)
K = int(K)
numList = list(map(int, input().split()))

##########################
start_time = time.time()
###########################

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

print(result)

#############################
end_time = time.time()
print("성능시간:", end_time-start_time)
