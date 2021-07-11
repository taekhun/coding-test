function solution(init, rates) {
  let profit = 0;
  let won = init;

  checkProfit(0, won, rates);
  return profit;
}

function checkProfit(idx, won, rates) {
  let dollar = 0;
  let result = 0;
  for (let i = idx; i < rates.length; i++) {
    //달러 살 때
    if (dollar == 0 && won <= rates[i]) {
      won = rates[i] - won;
      dollar++;
    }

    result = checkProfit(i + 1, won, rates);

    // 달러 팔 때
    if (dollar == 1 && won >= rates[i]) {
      won = won - rates[i];
      dollar--;
    }
  }

  if (won < result) {
    won = result;
  }

  return won;
}

const init = 1000;
const rates = [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100];

// const init = 1500;
// const rates = [1500, 1400, 1300, 1200];

console.log(solution(init, rates));
