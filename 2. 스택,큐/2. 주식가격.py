def solution(prices):
    answer = []
    MAX = len(prices)
    for i in range(MAX):
        count = -1
        if(i == MAX-1):
            answer.append(0)
            break
        for j in range(i, MAX):
            count += 1
            if(prices[i] > prices[j]):
                break
        answer.append(count)
    return answer


# prices = [1, 2, 3, 2, 3, 8, 2, 1]
result = solution(prices)
print(result)
