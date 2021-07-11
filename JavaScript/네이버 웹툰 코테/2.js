function solution(money, costs) {
  let maxCount = 0,
    count = 0,
    sum = 0;

  for (let i = 0; i < costs.length - 1; i++) {
    sum = 0;
    count = 0;
    for (let j = i; j < costs.length - 1; j++) {
      if (sum + costs[j] < money) {
        sum += costs[j];
        count++;
      } else break;
    }
    if (count > maxCount) maxCount = count;
  }

  return maxCount;
}

const money = 420;
const costs = [0, 900, 0, 200, 150, 0, 30, 50];
// const costs = [245, 317, 151, 192];
console.log(solution(money, costs));
