def solution(n, lost, reserve):
    # 여벌이 있는데 뺏긴놈
    a = set(lost) & set(reserve)
    lost = list(set(lost)-a)
    reserve = list(set(reserve)-a)

    for i in reserve:
        if i-1 in lost:
            lost.remove(i-1)
        elif i+1 in lost:
            lost.remove(i+1)

    return n-len(lost)


n = 5
lost = [2, 3, 4]
reserve = [1, 3, 5]
print(solution(n, lost, reserve))

'''
* 못 품
* 집합 이용
* remove() 함수 이용!
'''
