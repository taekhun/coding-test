function main(graph) {
  const result = [];

  function BFS(graph, start, visited) {
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const v = queue.shift();
      result.push(v);

      for (const i of graph[v]) {
        if (visited[i] !== true) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }

  BFS(graph, 1, []);
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
