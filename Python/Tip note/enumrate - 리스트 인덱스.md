# enumerate

### List index까지 출력

```py
array = ["hello", "world"]

# range(시작, 끝)
for i in range(0, len(array)):
    print(i, array[i])

# enumerate
for i, value in enumerate(array):
    print(i, value):
```

결과

    >> 0 'hello'
    >> 1 'world'
