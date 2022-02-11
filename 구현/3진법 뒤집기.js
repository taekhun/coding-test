function solution(n) {
  let temp = n;
  let dec_tri = '';
  let tri_dec = 0;
  let i = 0;

  while (temp !== 0) {
    dec_tri = (temp % 3) + dec_tri;
    temp = Math.floor(temp / 3);
  }
  temp = [...dec_tri].reverse().join('');

  i = temp.length - 1;
  while (temp.length !== 0) {
    tri_dec += Number(temp[temp.length - i - 1]) * Math.pow(3, i);
    temp = temp.slice(1);
    i--;
  }

  return tri_dec;
}

// 더 좋은 방법
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
