// 출처: https://overcome-the-limits.tistory.com/entry/알고리즘-제주코딩베이스캠프-문제-71-깊이-우선-탐색 [Plus Ultra]

const graph = {
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
  E: ['D', 'A'],
  F: ['D'],
};

function DFS(graph, start) {
  const visited = [];
  const stack = [start];

  while (stack.length !== 0) {
    const item = stack.pop();
    if (!visited.includes(item)) {
      visited.push(item);
      const sub = graph[item].filter((x) => !visited.includes(x));
      for (const i of sub) {
        stack.push(i);
      }
      console.log('@stack', stack);
    }
  }
  return visited;
}

console.log(DFS(graph, 'E'));

// 출력: E D F A C B
