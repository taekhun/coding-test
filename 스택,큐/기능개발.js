function solution(progresses, speeds) {
  const answer = [0];
  const newArr = progresses.map((_, i) => Math.ceil((100 - progresses[i]) / speeds[i]));
  let max = newArr[0];

  for (let i = 0, j = 0; i < newArr.length; i++) {
    if (newArr[i] <= max) {
      answer[j] += 1;
      continue;
    }
    max = newArr[i];
    answer[++j] = 1;
  }

  return answer;
}
