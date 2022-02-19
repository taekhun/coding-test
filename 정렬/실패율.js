function solution(N, stages) {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const losers = stages.reduce((acc, curr) => (curr === i ? acc + 1 : acc), 0);
    const total = stages.reduce((acc, curr) => (curr >= i ? acc + 1 : acc), 0);
    const loseRate = losers / total || 0;
    answer.push({ index: i, value: loseRate });
  }

  return answer
    .sort((a, b) => {
      if (a.value === b.value) {
        return a.index > b.index ? 1 : -1;
      }
      return a.value < b.value ? 1 : -1;
    })
    .map((a) => a.index);
}
