function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        count += 1;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  return count;
}

console.log(solution([1, 2, 2, 1, 1], 3));
