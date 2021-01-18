def solution(s):
    if len(s) % 2 == 0:
        mid = len(s)//2-1
        return s[mid:mid+2]
    else:
        return s[len(s)//2]


print(solution("qwer"))
