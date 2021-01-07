# 1. 해시
# 함수
def solution(participant, completion):
    newDict = {}
    for item in completion:
        if item in newDict:
            newDict[item] += 1
        else:
            newDict[item] = 1

    for item in participant:
        if item in newDict and newDict[item] != 0:
            newDict[item] -= 1
            participant
        else:
            return item


# 실행
participant = ["a", "b", "a", "b", "c"]
completion = ["a", "b", "a", "b"]
result = solution(participant, completion)
