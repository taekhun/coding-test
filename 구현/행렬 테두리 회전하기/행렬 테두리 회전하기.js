function solution(rows, columns, queries) {
  let array = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + c + 1)
  );
  let answer = [];

  queries.forEach((query) => {
    const start = { x: query[0], y: query[1] };
    const dest = { x: query[2], y: query[3] };
    const [numStack, prevPosStack] = rotateArray(start, dest, array);
    array = applyArray(numStack, prevPosStack, array, answer);
  });

  return answer;
}

function rotateArray(start, dest, array) {
  const numStack = [],
    prevPosStack = [];

  // top
  for (let col = start.y; col <= dest.y; col++) {
    numStack.push(array[start.x - 1][col - 1]);
    prevPosStack.push({ x: start.x - 1, y: col - 1 });
  }

  // right
  for (let row = start.x + 1; row <= dest.x; row++) {
    numStack.push(array[row - 1][dest.y - 1]);
    prevPosStack.push({ x: row - 1, y: dest.y - 1 });
  }

  // down
  for (let col = dest.y - 1; col >= start.y; col--) {
    numStack.push(array[dest.x - 1][col - 1]);
    prevPosStack.push({ x: dest.x - 1, y: col - 1 });
  }

  // left
  for (let row = dest.x - 1; row > start.x; row--) {
    numStack.push(array[row - 1][start.y - 1]);
    prevPosStack.push({ x: row - 1, y: start.y - 1 });
  }
  return [numStack, prevPosStack];
}

function applyArray(numStack, prevPosStack, array, answer) {
  let newArr = [...array];
  numStack.unshift(numStack.pop());

  prevPosStack.forEach(({ x, y }, idx) => {
    newArr[x][y] = numStack[idx];
  });

  answer.push(Math.min(...numStack));
  return newArr;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
