function solution(genres, plays) {
  let answer = [];
  let obj = {};

  plays.forEach((v, idx) => {
    obj[genres[idx]] = (obj[genres[idx]] || 0) + v;
  });

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  obj = {};

  sorted.forEach((s) => {
    let arr = [];

    genres.forEach((v, idx) => {
      v === s[0] && arr.push([plays[idx], idx]);
    });

    arr = arr.sort((a, b) => b[0] - a[0]);
    arr
      .filter((v, idx) => idx < 2)
      .forEach((v) => {
        answer.push(v[1]);
      });
  });

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop", "ballad"];
const plays = [500, 600, 150, 800, 2500, 1800];
console.log(solution(genres, plays));
