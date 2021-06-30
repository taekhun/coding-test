"use strict";

function solution(lottos, winNums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => winNums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

// const lottos = [9, 9, 9, 9, 9, 9];
const lottos = [44, 1, 0, 0, 31, 25];
const winNums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, winNums));
