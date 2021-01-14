import time
start_time = time.time()
###########################

h = int(input())

count = 0
for i in range(h+1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                count += 1
#############################
end_time = time.time()
print("성능시간:", end_time-start_time)
