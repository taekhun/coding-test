def solution(s):
    newS = s.lower()
    pCount = 0
    yCount = 0

    for i in newS:
        if(i == "p"):
            pCount += 1
        elif(i == "y"):
            yCount += 1
    if(pCount == yCount):
        return True
    else:
        return False


print(solution("pPys0Y"))
