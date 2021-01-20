A = input()
array = sorted(list(map(str, input().split(" "))))

dic = {}
for i in array:
    if i not in dic:
        dic[i] = 1
    else:
        dic[i] = 0

print([key for key, value in dic.items() if value == 1][0])
