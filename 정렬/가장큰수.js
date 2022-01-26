function solution(numbers) {
  const arr = numbers.map(String);
  arr.sort((a, b) => b + a - (a + b));
  return arr[0] === '0' ? '0' : arr.join('');
}

const case1 = [9, 5, 30, 34, 3];
const case2 = [11, 3, 24, 9, 88, 880, 222, 231, 0];
const case3 = [0, 1, 10, 100, 1000];
const case4 = [9, 998];
const case5 = [0, 0, 0];
const case6 = [21, 212];
const case7 = [40, 403];
