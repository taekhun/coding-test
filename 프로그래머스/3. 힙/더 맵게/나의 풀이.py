import heapq as hq


def solution(scoville, K):
    count = 0
    hq.heapify(scoville)

    while True:
        if(scoville[0] >= K):
            break

        if(len(scoville) == 1):
            return -1

        newItem = hq.heappop(scoville) + hq.heappop(scoville)*2
        hq.heappush(scoville, newItem)
        count += 1

    return count
