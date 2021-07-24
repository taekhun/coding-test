function solution(progresses, speeds) {
  let answer = [];
  let task = progresses.map((_, i) => Math.ceil((100 - progresses[i]) / speeds[i]));
  let first,
    second,
    count = 1;

  first = task.shift();

  while (true) {
    if (task.length == 0) {
      answer.push(count);
      break;
    }

    second = task.shift();

    if (first >= second) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      first = second;
    }
  }

  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5]));
