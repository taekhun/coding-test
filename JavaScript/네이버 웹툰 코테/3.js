function solution(idx, board) {
  const block = [];

  countClear(board);

  var answer = -1;
  return answer;
}

function lineCount(idx, board) {
  if (idx === 0) {
    board.forEach((row, i) => {});
  }
}

function countClear(board) {
  let clearCount = 0;
  let N = board.length;
  let lineCount = 0;

  for (let i = 0; i < N; i++) {
    lineCount = 0;
    for (let j = 0; j < N; j++) {
      board[i][j] && lineCount++;
    }
    lineCount == N && clearCount++;
  }
  return clearCount;
}

idx = 0;
board = [
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 0, 1],
];

console.log(solution(idx, board));
