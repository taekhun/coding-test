// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const item = getTopItemInColumn(board, moves[i] - 1);
    if (item) {
      if (stack[stack.length - 1] === item) {
        stack.pop();
        count += 2;
        continue;
      }
      stack.push(item);
    }
  }
  return count;
}

function getTopItemInColumn(board, colNum) {
  let item;

  for (let i = 0; i < board.length; i++) {
    if (board[i][colNum] !== 0) {
      item = board[i][colNum];
      board[i][colNum] = 0;
      return item;
    }
  }
  return false;
}

// console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])) // 4
