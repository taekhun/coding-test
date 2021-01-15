import re
currentIndex = 0
nextIndex = 0
count = 0


def MakePattern(patternStart):
    i = 0
    pattern = []
    for value in data:
        if(i == patternStart):
            break
        pattern.append(value)
        i += 1
    return pattern


def PatternCount(pattern, patternStart):
    global count
    i = 0
    for i, value in enumerate(pattern):
        if(pattern[i] == data[patternStart+i]):
            count += 1
        else:
            count = 0
            break
    return count


def ShortenData():
    global data, count, currentIndex, nextIndex
    nextIndex = currentIndex + count
    newPattern = data[currentIndex:nextIndex]

    print(currentIndex, nextIndex)

    # pattern count
    pCount = 0

    while(nextIndex+count <= len(data)-1):
        if(data[nextIndex:nextIndex+count] != newPattern):
            print(data[nextIndex:nextIndex+count], newPattern)
            break

        if(data[nextIndex:nextIndex+count] == newPattern):
            pCount += 1
            currentIndex += count
            nextIndex += count

    data = str(pCount+1)+newPattern+data[nextIndex:]
    print(data)


def solution(data):
    pattern = []
    i = 1
    while True:
        if (data[i] == data[0]):  # 패턴 시작점 찾기
            break
        elif (i == len(data)-1):
            answer = -1
            return -1
        i += 1
    patternStart = i
    pattern = MakePattern(patternStart)
    count = PatternCount(pattern, patternStart)

    ShortenData()
    # while(nextIndex+count < len(data)-1):
    #     ShortenData()
    # # print(nextIndex)

    return count


data = "abcabcabczdefdef"
# print(solution(data))
solution(data)
