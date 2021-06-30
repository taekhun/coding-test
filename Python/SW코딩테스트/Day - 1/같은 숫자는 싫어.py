def solution(array):
    newArray = []
    for i in range(0, len(array)-1):
        if(array[i] != array[i+1]):
            newArray.append(array[i-1])

    return newArray


arr = [1, 1, 3, 3, 0, 1, 1]

print(solution(arr))
