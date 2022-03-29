const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);
console.time();

let f = new Array(1000001).fill(1);
let d = new Array(1000001);
f[0] = 0;
d[0] = 0;

for (let i = 2; i <= 1000000; i++) {
  for (let j = 1; i * j <= 1000000; j++) {
    f[i * j] += i;
  }
}

for (let i = 1; i <= 1000000; i++) {
  d[i] = d[i - 1] + f[i];
}

const N = input.shift();
const answer = [];
input.forEach((v) => {
  answer.push(d[v]);
});

console.log(answer.join('\n'));
console.timeEnd();
