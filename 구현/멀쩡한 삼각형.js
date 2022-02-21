function solution1(w, h) {
  return w * h - (w + h - GCD(w, h));

  function GCD(num1, num2) {
    if (num2 == 0) return num1;
    return GCD(num2, num1 % num2);
  }
}

function solution2(w, h) {
  let count = 0;
  let scope = w / h;

  for (let i = 1; i <= w; i++) {
    count += Math.ceil(scope * i);
  }

  return (w * h - count) * 2;
}
