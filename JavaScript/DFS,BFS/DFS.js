function main(graph) {
  const result = [];

  function DFS(graph, v, visited) {
    visited[v] = true;
    result.push(v);
    graph[v].forEach((i) => {
      visited[i] !== true && DFS(graph, i, visited);
    });
  }

  DFS(graph, 1, []);
  return result;
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

console.log(main(graph));
