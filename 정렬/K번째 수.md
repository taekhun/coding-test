# 정렬 - K번 째 수

| https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

## 문제 설명

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

## 입출력 예

| array                 | commands                          | return    |
| --------------------- | --------------------------------- | --------- |
| [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3] |

## 입출력 예 설명

[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.

[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.

[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는
3입니다.

# 해결

1. 반복문을 돌며 `start`, `end`, `k`를 할당
2. `slice`로 자르고, `sort`로 정렬
3. `k`번 째 아이템을 `answer`에 push

## 배운점

### 1. slice 사용법

### 2. sort([compareFunc])

`compareFunc`를 생략할 시, `string`으로 판단하여, 유니코드 순으로 정렬된다.

-> `compareFunc`를 생략하지 말 것!

```js
[-2, 3, 4, 5, -1].sort((a, b) => a - b); // [ -2, -1, 3, 4, 5 ]
[-2, 3, 4, 5, -1].sort(); // [ -1, -2, 3, 4, 5 ]
```

### 나의 코드

```js
function solution(array, commands) {
  const answer = [];

  commands.forEach((command) => {
    const [start, end, k] = command;
    const target = array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
    answer.push(target);
  });

  return answer;
}
```
