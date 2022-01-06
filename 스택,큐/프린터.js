function solution(priorities, location) {
  const arr = priorities.map((v, i) => ({ index: i, value: v }));
  const queue = [];

  while (arr.length) {
    if (arr.some((a) => arr[0].value < a.value)) {
      arr.push(arr.shift());
    } else {
      queue.push(arr.shift());
    }
  }

  return queue.findIndex((a) => a.index === location) + 1;
}

const case1 = { priorities: [2, 1, 3, 2], location: 2 };
const case2 = { priorities: [1, 1, 9, 1, 1, 1], location: 0 };
