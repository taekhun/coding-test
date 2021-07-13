# zip

## 동일한 개수로 이루어진 자료형을 묶어 주는 함수

```py
major = ["국어", "영어", "수학"]
grade = ["A+", "C", "B-"]

array = list(zip(major, grade))
print(array)
```

결과

    [('국어', 'A+'), ('영어', 'C'), ('수학', 'B-')]
