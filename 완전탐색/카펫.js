function solution(brown, yellow) {
  const sum = brown + yellow;

  for (let i = sum; i >= Math.ceil(Math.sqrt(sum)); i--) {
    let [x, y] = [i, sum / i];

    if ((x - 2) * (y - 2) === yellow && sum - yellow === brown) {
      return [x, y];
    }
  }
}

// https://programmers.co.kr/learn/courses/30/lessons/42842
