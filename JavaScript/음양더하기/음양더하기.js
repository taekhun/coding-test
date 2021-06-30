"use strict";

function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((value, i) => {
    if (signs[i] == true) answer += value;
    else answer -= value;
  });
  return answer;
}

console.log(solution([1, 2, 3], [true, false, true]));
