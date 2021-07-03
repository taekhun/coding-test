function solution(answers) {
  let count = [0, 0, 0];
  const supojas = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  supojas.forEach((supoja, supojaIdx) =>
    answers.forEach((v, i) => v == supoja[i % supoja.length] && count[supojaIdx]++)
  );

  return count.reduce((acc, cur, idx) => (cur === Math.max(...count) ? acc.push(idx + 1) : acc, acc), []);
}

console.log(solution([1, 3, 2, 4, 2]));
