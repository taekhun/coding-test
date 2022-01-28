function solution(priorities, location) {
  const arr = Object.entries(priorities);
  const stack = [];

  while (arr.length) {
    if (arr.some((a) => arr[0][1] < a[1])) {
      arr.push(arr.shift());
    } else {
      stack.push(arr.shift());
    }
  }

  return stack.findIndex((a) => a[0] === String(location)) + 1;
}

const case1 = { priorities: [2, 1, 3, 2], location: 2 };
const case2 = { priorities: [1, 1, 9, 1, 1, 1], location: 0 };
