## For in list

```py
# 2글자씩 끊어서 리스트에 저장하기.py
s = "I am Taekhun. Nice to meet you"

# 축약형
array = [s[i:i+2] for i in range(0, len(s), 2)]

# 동일
for i in range(0,len(s),2):
    array.append(s[i:i+2])


print(array)
```
