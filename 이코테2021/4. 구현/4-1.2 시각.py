import time
start_time = time.time()
###########################


N = int(input())
count = 0
for i in range(N+1):
    if(i == 3 or i == 13 or i == 23):
        count += 60*60
    else:
        count += 15*60*2-15*15

print(count)


#############################
end_time = time.time()
print("성능시간:", end_time-start_time)
