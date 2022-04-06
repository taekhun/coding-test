## 출처

프로그래머스 2021 Dev-Matching 웹 백엔드
https://programmers.co.kr/learn/courses/30/lessons/77485

## 해결

1. query의 start와 dest를 토대로 시계 방향으로 top, right, down, left로 순회하여 숫자 값은 `numStack`에, 좌표 값은 `prevPosStack`에 넣어주었다.
2. `prevPosStack`은 유지한 채, `numStack`은 `pop`한 맨 뒤의 숫자를 맨 앞에 `unshift`해 주었다. _[1,2,3,4,5] -> [2,3,4,5,1]_
3. 그리고 `prevPosStack`의 좌표에 따라 순서대로 `array`를 `numStack`의 값으로 변경한다.

## 배운 점

배운점 1

`array`를 순회할 때 아예, `tmp`에 값을 보관하여 값을 변경하는 것도 좋은 방법인 것 같다.

배운점 2

1부터 N\*M까지, N행 M열의 2차 행렬 한 줄 코드

```javascript
const array = [...Array(N)].map((_, r) => [...Array(M)].map((_, c) => r * columns + c + 1));
```
