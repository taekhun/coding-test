import time

N, K = map(int, input().split())

########################
start_time = time.time()
########################

count = 0
while(N != 1):
    if(N % K == 0):
        N = N/K
    else:
        N = N-1
    count += 1

print(count)

######################################
end_time = time.time()
print("성능시간:", end_time-start_time)
######################################
