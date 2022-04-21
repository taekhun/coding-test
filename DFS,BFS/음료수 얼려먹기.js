function main(graph) {
  let count = 0;

  graph.forEach((row, i) =>
    row.forEach((_, j) => {
      if (dfs(graph, [i, j])) {
        count += 1;
      }
    })
  );

  dfs(graph, [0, 0]);
  return count;
}

function dfs(graph, [i, j]) {
  const [N, M] = [graph.length, graph[0].length];
  if (i <= -1 || i >= N || j <= -1 || j >= M) return false;

  if (!graph[i][j]) {
    graph[i][j] = 1;
    dfs(graph, [i, j + 1]);
    dfs(graph, [i, j - 1]);
    dfs(graph, [i + 1, j]);
    dfs(graph, [i - 1, j]);
    return true;
  }
  return false;
}

const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

console.log(main(graph));
