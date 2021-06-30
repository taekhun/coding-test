def solution(numbers):
    newArray = []
    for i in range(0, len(numbers)):
        for j in range(0, len(numbers)):
            if(i == j):
                break
            else:
                newArray.append(numbers[i]+numbers[j])
    answer = list(set(newArray))
    answer.sort()
    return answer


numbers = [5, 0, 2, 7]

print(solution(numbers))
